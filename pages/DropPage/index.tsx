import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { mint } from "../api/mint";

export default function Home() {
  const [amountToClaim, setAmountToClaim] = useState("");

  // First, instantiate the SDK
  const storage = new ThirdwebStorage();

  // We define metadata for an NFT
  const [description, setDiscription] = useState({
    credentialId: "NFT #1",
    description: "This is my first NFT",
    toAddress: "path/to/file.jpg",
    imageURIs: "",
    externalURIs: "",
  });
  const [imageUri, setImageURI] = useState("");

  const _to = "0x6727c42065F65Efb02de3b4fCe71f8F5520596a1";
  const _externalURI = "test";
  return (
    <div>
      <Web3Button
        contractAddress="0x583Da11bFE498C6E5E93289D93948CDe31ce9f61"
        action={(contract) => {
          mint;
        }}
      >
        mintAndTransfer
      </Web3Button>
    </div>
  );
}
