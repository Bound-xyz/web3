import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// Boundの情報で初期化
const sdk = ThirdwebSDK.fromPrivateKey(
  // Boundのウォレットのプライベートキー
  process.env.ADMIN_PRIVATE_KEY || "",
  "mumbai" // configure this to your network
);

export const mint = async (toAddresses: string, externalURI: string) => {
  const contract = await sdk.getContract("{{contract_address}}");
  contract.call("mintAndTransfer", toAddresses, externalURI);
};
