import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { toAddress, externalURI } = JSON.parse(req.body);

  const sdk = await ThirdwebSDK.fromPrivateKey(
    // Boundのウォレットのプライベートキー
    process.env.ADMIN_PRIVATE_KEY || "",
    "mumbai" // configure this to your network
  );

  const contract = await sdk.getContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""
  );

  const a = await contract.call(
    "mintAndTransfer",
    toAddress.trim(),
    externalURI
  );

  res.status(200).json({});
};
