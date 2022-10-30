import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";


export default function Home() {
  const [amountToClaim, setAmountToClaim] = useState("");
  const onAction = (contract) => {
    console.log(contract)
    return contract.erc20.claim(amountToClaim)
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
          contractAddress="0x5ec440E5965da9570CAa66402980c6D20cbe0663"
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
