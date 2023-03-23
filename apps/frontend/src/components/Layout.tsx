import { FaGithub, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import type { ReactNode } from "react";
import { useModalStore } from "../modals/useModalStore";
import Button from "./common/Button";

function Footer() {
  return (
    <footer className="footer footer-center p-4 text-base-content">
      <SocialLinks />
    </footer>
  );
}

function SocialLinks() {
  const openNftModal = useModalStore((state) => state.openModal);
  return (
    <div className="flex flex-row space-x-4">
      <Link
        href="https://twitter.com/grmkris"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <div>
          <FaTwitter size={24} color={""} />
          <p>{"@grmkris"}</p>
        </div>
      </Link>
      <Link
        href="https://github.com/grmkris/subgraph-observer"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <FaGithub size={24} color={""} />
        <p>{"subgraph-observer"}</p>
      </Link>
      <Button
        onClick={() => openNftModal("CheckNftsModal")}
        color={"ghost"}
        size={"xs"}
      >
        Check NFTs
      </Button>
    </div>
  );
}

export const Layout = (props: { children: ReactNode }) => {
  const router = useRouter();
  console.log(router.pathname);

  if (router.pathname.includes("/subgraph/")) {
    return <div className={"max-h-screen max-w-full"}>{props.children}</div>;
  }
  return (
    <div className={"flex h-screen flex-col text-center"}>
      <main className="flex-1 px-4 py-12 sm:px-16 md:px-4 xl:px-16">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
