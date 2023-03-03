import { useRouter } from "next/router";
import React from "react";
import NonSSRWrapper from "../../components/common/NonSSRWrapper";
import { useLinkData, useLinks } from "../../hooks/useLinks";
import { SubgraphTable } from "../../components/subgraphs-table/SubgraphTable";
import NoDataAlert from "../../components/subgraphs-table/NoDataAlert";

function SharePage() {
  return (
    <NonSSRWrapper>
      <ShareComponent />
    </NonSSRWrapper>
  );
}

export default SharePage;

const ShareComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const linkData = useLinkData({ id: id as string });

  return (
    <div className={"flex w-full flex-col pt-5 md:pt-6 "}>
      {linkData?.data ? (
        <SubgraphTable inputs={linkData.data} />
      ) : (
        <NoDataAlert />
      )}
    </div>
  );
};
