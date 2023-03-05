import { FaGithub, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import type { ReactNode } from "react";
import { Modals } from "../modals/Modals";
import { useRef } from "react";
import { useModalStore } from "../modals/useModalStore";

function Footer() {
  return (
    <footer className="footer footer-center p-4 text-base-content">
      <SocialLinks />
    </footer>
  );
}

function SocialLinks() {
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
      <ModalsWrapper />
      <main className="flex-1 px-4 py-12 sm:px-16 md:px-4 xl:px-16">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

const ModalsWrapper = () => {
  const isModalOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  return (
    <>
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
            <Modals />
          </div>
        </div>
      </div>
    </>
  );
};
