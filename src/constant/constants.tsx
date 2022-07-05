export const contractAddress = "0xC95e56018Ba178eF91eb2aB251c4B03e44454530";
export const url = "http://localhost:3000/";
export const AuroraTestnetChainId = 1313161555;
export const AuroraTestnetChain = {
  chainId: `0x${AuroraTestnetChainId.toString(16)}`,
  chainName: "Aurora Testnet",
  rpcUrls: ["https://testnet.aurora.dev/"],
  blockExplorerUrls: ["https://testnet.aurorascan.dev/"],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
};
