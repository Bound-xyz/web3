import React, { useState } from "react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { mint } from "pages/api/mint";
import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
  // ログイン中のwallet addressを取得
  const address = useAddress();

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

  const _to = address || "";
  const _externalURI = "nakayama";

  // mintの実行
  const onClick = () => {
    mint({ toAddress: _to, externalURI: _externalURI });
  };
  return (
    <div>
      <button onClick={onClick}>mintAndTransfer</button>
    </div>
  );
}
