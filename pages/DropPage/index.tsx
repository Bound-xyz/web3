import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { NFTDrop } from "@thirdweb-dev/sdk";


export default function Home() {
  const [amountToClaim, setAmountToClaim] = useState("");
  const onAction = (contract: NFTDrop ) => {
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
          contractAddress="0x57C6a7A01E262A0cd2194217b59098C639Bf9599"
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
