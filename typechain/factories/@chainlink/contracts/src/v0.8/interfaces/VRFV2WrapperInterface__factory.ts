/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  VRFV2WrapperInterface,
  VRFV2WrapperInterfaceInterface,
} from "../../../../../../@chainlink/contracts/src/v0.8/interfaces/VRFV2WrapperInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
    ],
    name: "calculateRequestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_requestGasPriceWei",
        type: "uint256",
      },
    ],
    name: "estimateRequestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRequestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class VRFV2WrapperInterface__factory {
  static readonly abi = _abi;
  static createInterface(): VRFV2WrapperInterfaceInterface {
    return new utils.Interface(_abi) as VRFV2WrapperInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFV2WrapperInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFV2WrapperInterface;
  }
}
