import { ThirdwebSDK } from "@thirdweb-dev/sdk";

interface getTokenListProps {
  ownerAddress: string;
}

export const getTokenList = async (props: getTokenListProps) => {
  const { ownerAddress } = props;
  const sdk = await ThirdwebSDK.fromPrivateKey(
    // Boundのウォレットのプライベートキー
    // process.env.ADMIN_PRIVATE_KEY || "",
    "6c13bfe769dea90a2eeab7d480118a584e02e96e9f0aca7e57bee8a21b4dc474",
    "mumbai" // configure this to your network
  );
  const contract = await sdk.getContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""
  );

  const nftList = await contract.call("ownedNFTs", ownerAddress);
  return nftList;
};
