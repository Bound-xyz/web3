import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "src/styles/global.css";
import { Layout } from "src/components/layouts/Layout";
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: "example.com",
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;
