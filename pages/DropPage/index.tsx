import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { NFTDrop, StandardErc721 } from "@thirdweb-dev/sdk";


export default function Home() {
  const [amountToClaim, setAmountToClaim] = useState("");
  const onAction = (contract: any ) => {
    console.log(contract)
    return contract.claim(amountToClaim)
  }

  return (
    <div >
      <h2>Claim Tokens</h2>
      <p >
        Claim ERC20 tokens from the prebuilt{" "}
        <a
          
          href="https://portal.thirdweb.com/pre-built-contracts/token-drop"
          target="_blank"
          rel="noreferrer"
        >
          token drop
        </a>{" "}
        contract.
      </p>

      <hr  />

      <div >
        <input
          type="text"
          placeholder="Enter amount to claim"
          onChange={(e) => setAmountToClaim(e.target.value)}
          
        />
        <Web3Button
          accentColor="#5204BF"
          colorMode="dark"
          contractAddress="0xb0c2F6b498fc2F9503eC38e2f502eFF905B596Ed"
          action={onAction}
          onSuccess={() => alert("Claimed!")}
          onError={(err) => alert(err)}
        >
          Claim Tokens
        </Web3Button>
      </div>
    </div>
  );
}