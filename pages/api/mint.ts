import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { toAddress, externalURI } = req.body;
  console.log("test");

  const sdk = await ThirdwebSDK.fromPrivateKey(
    // Boundのウォレットのプライベートキー
    process.env.ADMIN_PRIVATE_KEY || "",
    "mumbai" // configure this to your network
  );

  const contract = await sdk.getContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""
  );

  contract.call("mintAndTransfer", toAddress, externalURI);
};
