import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'HOOTLES',
  tokenName: 'HOOTLES',
  tokenSymbol: 'HOT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 3333,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.0009,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0xFAf3795ac17962D48B9abA848151efd2107a634e",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
