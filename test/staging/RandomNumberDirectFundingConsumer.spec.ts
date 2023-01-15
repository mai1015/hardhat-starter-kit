import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { network, ethers, run } from "hardhat"
import { RandomNumberDirectFundingConsumerV2 } from "../../typechain"
import { assert } from "chai"
import { BigNumber } from "ethers"
import { autoFundCheck } from "../../helper-functions"

developmentChains.includes(network.name)
    ? describe.skip
    : describe("Random Number Direct Funding Consumer Staging Tests", async () => {
          let randomNumberConsumerV2: RandomNumberDirectFundingConsumerV2, linkToken, deployer

          beforeEach(async () => {
              randomNumberConsumerV2 = await ethers.getContract(
                  "RandomNumberDirectFundingConsumerV2"
              )

              const chainId: number | undefined = network.config.chainId
              if (!chainId) return
              const linkTokenAddress = networkConfig[chainId].linkToken!
              const amount: BigNumber = networkConfig[chainId].fundAmount
              if (
                  await autoFundCheck(
                      randomNumberConsumerV2.address,
                      network.name,
                      linkTokenAddress,
                      ""
                  )
              ) {
                  await run("fund-link", {
                      contract: randomNumberConsumerV2.address,
                      fundamount: amount,
                      linkaddress: linkTokenAddress,
                  })
              }
          })

          afterEach(async function () {
              randomNumberConsumerV2.removeAllListeners()
          })

          it("Our event should successfully fire event on callback", async () => {
              const gasLimit = 200000
              const numWords = 2
              // we setup a promise so we can wait for our callback from the `once` function
              return new Promise<void>(async (resolve, reject) => {
                  // setup listener for our event
                  randomNumberConsumerV2.once("RequestFulfilled", async () => {
                      console.log("RequestFulfilled event fired!")
                      const requestId = await randomNumberConsumerV2.lastRequestId()
                      const numberOfRequests = await randomNumberConsumerV2.getNumberOfRequests()
                      const { fulfilled, randomWords } =
                          await randomNumberConsumerV2.getRequestStatus(requestId)

                      try {
                          assert(
                              numberOfRequests.eq(ethers.constants.One),
                              "Number of requests is not One"
                          )
                          assert(fulfilled === true, "Fulfilled is false")
                          assert(
                              randomWords.length === numWords,
                              "Didn't obtain the right number of random words"
                          )
                          resolve()
                      } catch (e) {
                          reject(e)
                      }
                  })
                  try {
                      const tx = await randomNumberConsumerV2.requestRandomWords(
                          gasLimit,
                          3,
                          numWords,
                          {
                              gasLimit: 400000,
                          }
                      )
                      // wait until the transaction is mined
                      const receipt = await tx.wait()
                      console.log("Request transaction hash", receipt.transactionHash)
                  } catch (error) {
                      reject(error)
                  }
              })
          })
      })
