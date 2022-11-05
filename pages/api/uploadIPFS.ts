import { ThirdwebStorage } from "@thirdweb-dev/storage";

// First, instantiate the SDK
const storage = new ThirdwebStorage();

// Here we get the IPFS URI of where our metadata has been uploaded
export const uploadIPFS = async (metadata: {}) => {
  const uri = await storage.upload(metadata);
  return uri;
};
