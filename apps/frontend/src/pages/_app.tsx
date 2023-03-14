import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "../components/Layout";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Analytics } from "@vercel/analytics/react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chainId) => {
        return {
          http: "https://rpc.ankr.com/polygon_mumbai/042d0fc1c6eacbb798bb9745ba09695ba5cc84c70e5c8a145bd66c78217138c6",
        };
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

// Create a query client
const queryClient = new QueryClient();

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  queryClient,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
            <Analytics />
          </Layout>
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default trpc.withTRPC(MyApp);
