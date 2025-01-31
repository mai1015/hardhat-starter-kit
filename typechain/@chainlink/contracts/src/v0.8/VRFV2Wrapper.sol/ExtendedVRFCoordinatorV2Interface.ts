/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface ExtendedVRFCoordinatorV2InterfaceInterface
  extends utils.Interface {
  functions: {
    "acceptSubscriptionOwnerTransfer(uint64)": FunctionFragment;
    "addConsumer(uint64,address)": FunctionFragment;
    "cancelSubscription(uint64,address)": FunctionFragment;
    "createSubscription()": FunctionFragment;
    "getConfig()": FunctionFragment;
    "getFallbackWeiPerUnitLink()": FunctionFragment;
    "getFeeConfig()": FunctionFragment;
    "getRequestConfig()": FunctionFragment;
    "getSubscription(uint64)": FunctionFragment;
    "pendingRequestExists(uint64)": FunctionFragment;
    "removeConsumer(uint64,address)": FunctionFragment;
    "requestRandomWords(bytes32,uint64,uint16,uint32,uint32)": FunctionFragment;
    "requestSubscriptionOwnerTransfer(uint64,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptSubscriptionOwnerTransfer"
      | "addConsumer"
      | "cancelSubscription"
      | "createSubscription"
      | "getConfig"
      | "getFallbackWeiPerUnitLink"
      | "getFeeConfig"
      | "getRequestConfig"
      | "getSubscription"
      | "pendingRequestExists"
      | "removeConsumer"
      | "requestRandomWords"
      | "requestSubscriptionOwnerTransfer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addConsumer",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createSubscription",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFallbackWeiPerUnitLink",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscription",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRequestExists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeConsumer",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestSubscriptionOwnerTransfer",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackWeiPerUnitLink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRequestExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ExtendedVRFCoordinatorV2Interface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExtendedVRFCoordinatorV2InterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelSubscription(
      subId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createSubscription(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number] & {
        minimumRequestConfirmations: number;
        maxGasLimit: number;
        stalenessSeconds: number;
        gasAfterPaymentCalculation: number;
      }
    >;

    getFallbackWeiPerUnitLink(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFeeConfig(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        fulfillmentFlatFeeLinkPPMTier1: number;
        fulfillmentFlatFeeLinkPPMTier2: number;
        fulfillmentFlatFeeLinkPPMTier3: number;
        fulfillmentFlatFeeLinkPPMTier4: number;
        fulfillmentFlatFeeLinkPPMTier5: number;
        reqsForTier2: number;
        reqsForTier3: number;
        reqsForTier4: number;
        reqsForTier5: number;
      }
    >;

    getRequestConfig(
      overrides?: CallOverrides
    ): Promise<[number, number, string[]]>;

    getSubscription(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    pendingRequestExists(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptSubscriptionOwnerTransfer(
    subId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addConsumer(
    subId: PromiseOrValue<BigNumberish>,
    consumer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelSubscription(
    subId: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createSubscription(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getConfig(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number] & {
      minimumRequestConfirmations: number;
      maxGasLimit: number;
      stalenessSeconds: number;
      gasAfterPaymentCalculation: number;
    }
  >;

  getFallbackWeiPerUnitLink(overrides?: CallOverrides): Promise<BigNumber>;

  getFeeConfig(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, number, number, number, number] & {
      fulfillmentFlatFeeLinkPPMTier1: number;
      fulfillmentFlatFeeLinkPPMTier2: number;
      fulfillmentFlatFeeLinkPPMTier3: number;
      fulfillmentFlatFeeLinkPPMTier4: number;
      fulfillmentFlatFeeLinkPPMTier5: number;
      reqsForTier2: number;
      reqsForTier3: number;
      reqsForTier4: number;
      reqsForTier5: number;
    }
  >;

  getRequestConfig(
    overrides?: CallOverrides
  ): Promise<[number, number, string[]]>;

  getSubscription(
    subId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string[]] & {
      balance: BigNumber;
      reqCount: BigNumber;
      owner: string;
      consumers: string[];
    }
  >;

  pendingRequestExists(
    subId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeConsumer(
    subId: PromiseOrValue<BigNumberish>,
    consumer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestRandomWords(
    keyHash: PromiseOrValue<BytesLike>,
    subId: PromiseOrValue<BigNumberish>,
    minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
    callbackGasLimit: PromiseOrValue<BigNumberish>,
    numWords: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestSubscriptionOwnerTransfer(
    subId: PromiseOrValue<BigNumberish>,
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelSubscription(
      subId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createSubscription(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number] & {
        minimumRequestConfirmations: number;
        maxGasLimit: number;
        stalenessSeconds: number;
        gasAfterPaymentCalculation: number;
      }
    >;

    getFallbackWeiPerUnitLink(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeConfig(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        fulfillmentFlatFeeLinkPPMTier1: number;
        fulfillmentFlatFeeLinkPPMTier2: number;
        fulfillmentFlatFeeLinkPPMTier3: number;
        fulfillmentFlatFeeLinkPPMTier4: number;
        fulfillmentFlatFeeLinkPPMTier5: number;
        reqsForTier2: number;
        reqsForTier3: number;
        reqsForTier4: number;
        reqsForTier5: number;
      }
    >;

    getRequestConfig(
      overrides?: CallOverrides
    ): Promise<[number, number, string[]]>;

    getSubscription(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string[]] & {
        balance: BigNumber;
        reqCount: BigNumber;
        owner: string;
        consumers: string[];
      }
    >;

    pendingRequestExists(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    acceptSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelSubscription(
      subId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createSubscription(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getFallbackWeiPerUnitLink(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getRequestConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getSubscription(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingRequestExists(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelSubscription(
      subId: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createSubscription(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFallbackWeiPerUnitLink(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequestConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubscription(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingRequestExists(
      subId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeConsumer(
      subId: PromiseOrValue<BigNumberish>,
      consumer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestRandomWords(
      keyHash: PromiseOrValue<BytesLike>,
      subId: PromiseOrValue<BigNumberish>,
      minimumRequestConfirmations: PromiseOrValue<BigNumberish>,
      callbackGasLimit: PromiseOrValue<BigNumberish>,
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestSubscriptionOwnerTransfer(
      subId: PromiseOrValue<BigNumberish>,
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
