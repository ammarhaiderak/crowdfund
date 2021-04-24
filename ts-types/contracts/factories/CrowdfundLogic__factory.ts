/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CrowdfundLogic } from "../CrowdfundLogic";

export class CrowdfundLogic__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CrowdfundLogic> {
    return super.deploy(overrides || {}) as Promise<CrowdfundLogic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrowdfundLogic {
    return super.attach(address) as CrowdfundLogic;
  }
  connect(signer: Signer): CrowdfundLogic__factory {
    return super.connect(signer) as CrowdfundLogic__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdfundLogic {
    return new Contract(address, _abi, signerOrProvider) as CrowdfundLogic;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BidAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Contribution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountRaised",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "creatorAllocation",
        type: "uint256",
      },
    ],
    name: "FundingClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ReceivedERC721",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Redeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "closeFunding",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "backer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fundingCap",
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
    name: "fundingRecipient",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "logic",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "operator",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorPercent",
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
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "redeemableFromTokens",
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
    name: "status",
    outputs: [
      {
        internalType: "enum CrowdfundStorage.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "valueToTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611182806100206000396000f3fe60806040526004361061016a5760003560e01c806370a08231116100cb5780639744b8dc1161007f578063db006a7511610059578063db006a75146103e3578063dd62ed3e14610403578063e3b2594f1461043b57600080fd5b80639744b8dc14610383578063a9059cbb146103a3578063d7dfa0dd146103c357600080fd5b80637ecebe00116100b05780637ecebe001461032e5780638418cd991461035b57806395d89b411461036e57600080fd5b806370a08231146102eb5780637b4044a01461031857600080fd5b806323b872dd11610122578063313ce56711610107578063313ce5671461028d57806331a3a506146102b4578063570ca735146102cb57600080fd5b806323b872dd1461024d5780632f87e4be1461026d57600080fd5b806318160ddd1161015357806318160ddd146101ca5780631bb534ba146101ee578063200d2ed21461022657600080fd5b806306fdde031461016f578063095ea7b31461019a575b600080fd5b34801561017b57600080fd5b50610184610451565b6040516101919190610fe6565b60405180910390f35b3480156101a657600080fd5b506101ba6101b5366004610f94565b6104df565b6040519015158152602001610191565b3480156101d657600080fd5b506101e060085481565b604051908152602001610191565b3480156101fa57600080fd5b5060015461020e906001600160a01b031681565b6040516001600160a01b039091168152602001610191565b34801561023257600080fd5b506006546102409060ff1681565b6040516101919190610fbe565b34801561025957600080fd5b506101ba610268366004610f54565b6104f5565b34801561027957600080fd5b506101e0610288366004610fa6565b61055d565b34801561029957600080fd5b506102a2601281565b60405160ff9091168152602001610191565b3480156102c057600080fd5b506102c961057d565b005b3480156102d757600080fd5b5060005461020e906001600160a01b031681565b3480156102f757600080fd5b506101e0610306366004610ece565b60096020526000908152604090205481565b34801561032457600080fd5b506101e060035481565b34801561033a57600080fd5b506101e0610349366004610ece565b600b6020526000908152604090205481565b6102c9610369366004610ef1565b61072b565b34801561037a57600080fd5b506101846109d3565b34801561038f57600080fd5b506101e061039e366004610fa6565b6109e0565b3480156103af57600080fd5b506101ba6103be366004610f94565b6109ee565b3480156103cf57600080fd5b50600c5461020e906001600160a01b031681565b3480156103ef57600080fd5b506102c96103fe366004610fa6565b6109fb565b34801561040f57600080fd5b506101e061041e366004610f1c565b600a60209081526000928352604080842090915290825290205481565b34801561044757600080fd5b506101e060025481565b6005805461045e906110e3565b80601f016020809104026020016040519081016040528092919081815260200182805461048a906110e3565b80156104d75780601f106104ac576101008083540402835291602001916104d7565b820191906000526020600020905b8154815290600101906020018083116104ba57829003601f168201915b505050505081565b60006104ec338484610b88565b50600192915050565b6001600160a01b0383166000908152600a602090815260408083203384529091528120546105249083906110cc565b6001600160a01b0385166000908152600a60209081526040808320338452909152902055610553848484610bea565b5060019392505050565b60085460009061056d478461108f565b610577919061106f565b92915050565b6000546001600160a01b0316331461059457600080fd5b600260075414156105ec5760405162461bcd60e51b815260206004820152600e60248201527f5265656e7472616e742063616c6c00000000000000000000000000000000000060448201526064015b60405180910390fd5b6002600755600060065460ff16600181111561061857634e487b7160e01b600052602160045260246000fd5b146106655760405162461bcd60e51b815260206004820152601f60248201527f43726f776466756e643a2046756e64696e67206d757374206265206f70656e0060448201526064016105e3565b600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556003546000906106a19060646110cc565b6008546003546106b1919061108f565b6106bb919061106f565b6000549091506106d4906001600160a01b031682610c92565b60408051478152602081018390527f352ce94da8e3109dc06c05ed84e8a0aaf9ce2c4329dfd10ad1190cf620048972910160405180910390a1600154610723906001600160a01b031647610d24565b506001600755565b6002600754141561077e5760405162461bcd60e51b815260206004820152600e60248201527f5265656e7472616e742063616c6c00000000000000000000000000000000000060448201526064016105e3565b6002600755600060065460ff1660018111156107aa57634e487b7160e01b600052602160045260246000fd5b146107f75760405162461bcd60e51b815260206004820152601f60248201527f43726f776466756e643a2046756e64696e67206d757374206265206f70656e0060448201526064016105e3565b34811461086c5760405162461bcd60e51b815260206004820152602360248201527f43726f776466756e643a20416d6f756e74206973206e6f742076616c7565207360448201527f656e74000000000000000000000000000000000000000000000000000000000060648201526084016105e3565b60025447116108ce5761088782610882836109e0565b610c92565b604080516001600160a01b0384168152602081018390527f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b910160405180910390a16109ca565b60006108da82476110cc565b905060025481106109535760405162461bcd60e51b815260206004820152602660248201527f43726f776466756e643a2046756e64696e672063617020616c7265616479207260448201527f656163686564000000000000000000000000000000000000000000000000000060648201526084016105e3565b60008160025461096391906110cc565b905061097284610882836109e0565b604080516001600160a01b0386168152602081018390527f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b910160405180910390a16109c7846109c283866110cc565b610d24565b50505b50506001600755565b6004805461045e906110e3565b60006105776103e88361108f565b60006104ec338484610bea565b60026007541415610a4e5760405162461bcd60e51b815260206004820152600e60248201527f5265656e7472616e742063616c6c00000000000000000000000000000000000060448201526064016105e3565b600260075547610ac65760405162461bcd60e51b815260206004820152602560248201527f43726f776466756e643a204e6f2045544820617661696c61626c6520746f207260448201527f656465656d00000000000000000000000000000000000000000000000000000060648201526084016105e3565b33600090815260096020526040902054811115610b255760405162461bcd60e51b815260206004820152601f60248201527f43726f776466756e643a20496e73756666696369656e742062616c616e63650060448201526064016105e3565b6000610b308261055d565b9050610b3c3383610e42565b610b463382610d24565b60408051338152602081018390527f4896181ff8f4543cc00db9fe9b6fb7e6f032b7eb772c72ab1ec1b4d2e03b9369910160405180910390a150506001600755565b6001600160a01b038381166000818152600a602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316600090815260096020526040902054610c0e9082906110cc565b6001600160a01b038085166000908152600960205260408082209390935590841681522054610c3e908290611057565b6001600160a01b0380841660008181526009602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610bdd9085815260200190565b80600854610ca09190611057565b6008556001600160a01b038216600090815260096020526040902054610cc7908290611057565b6001600160a01b0383166000818152600960205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610d189085815260200190565b60405180910390a35050565b80471015610d745760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016105e3565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610dc1576040519150601f19603f3d011682016040523d82523d6000602084013e610dc6565b606091505b5050905080610e3d5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016105e3565b505050565b6001600160a01b038216600090815260096020526040902054610e669082906110cc565b6001600160a01b038316600090815260096020526040902055600854610e8d9082906110cc565b6008556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610d18565b600060208284031215610edf578081fd5b8135610eea81611134565b9392505050565b60008060408385031215610f03578081fd5b8235610f0e81611134565b946020939093013593505050565b60008060408385031215610f2e578182fd5b8235610f3981611134565b91506020830135610f4981611134565b809150509250929050565b600080600060608486031215610f68578081fd5b8335610f7381611134565b92506020840135610f8381611134565b929592945050506040919091013590565b60008060408385031215610f03578182fd5b600060208284031215610fb7578081fd5b5035919050565b6020810160028310610fe057634e487b7160e01b600052602160045260246000fd5b91905290565b6000602080835283518082850152825b8181101561101257858101830151858201604001528201610ff6565b818111156110235783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000821982111561106a5761106a61111e565b500190565b60008261108a57634e487b7160e01b81526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110c7576110c761111e565b500290565b6000828210156110de576110de61111e565b500390565b600181811c908216806110f757607f821691505b6020821081141561111857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461114957600080fd5b5056fea2646970667358221220bc3d417011645bcf680091ae1e3b415677e1e1b47771e87002edf7149bd082da64736f6c63430008040033";
