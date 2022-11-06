import React, { useState } from "react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { getTokenURI } from "pages/api/getTokenURI";
import { getTokenList } from "pages/api/getTokenList";
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

  const onClick = () =>
    fetch("http://localhost:3000/api/mint", {
      method: "post",
      body: JSON.stringify({ toAddress: _to, externalURI: _externalURI }),
    });

  // mintの実行
  return (
    <div>
      <button onClick={onClick}>mintAndTransfer</button>
    </div>
  );
}
