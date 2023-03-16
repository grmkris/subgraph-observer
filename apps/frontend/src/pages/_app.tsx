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
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { useModalStore } from "../modals/useModalStore";
import { EditSubgraphFormModal } from "../modals/EditSubgraphFormModal";
import { ShareDashboardModal } from "../modals/ShareDashboardModal";
import { shallow } from "zustand/shallow";

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
            <ModalsWrapper />
          </Layout>
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default trpc.withTRPC(MyApp);

const ModalsWrapper = () => {
  const isModalOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  return (
    <>
      <div className={"badge-outline badge prose mt-2 hidden"} />
      <div>
        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id="my-modal-3"
          className="modal-toggle"
          checked={isModalOpen}
          readOnly={true}
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn-sm btn-circle btn absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </label>
            <SelectedModal />
          </div>
        </div>
      </div>
    </>
  );
};

const SelectedModal = () => {
  const { view } = useModalStore((state) => ({ view: state.view }), shallow);
  switch (view) {
    case "EditSubgraph":
      return <EditSubgraphFormModal />;
    case "ShareDashboard":
      return <ShareDashboardModal />;
    default:
      return null;
  }
};
