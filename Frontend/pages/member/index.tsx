import React from "react";
import { OverviewContent, SideBar } from "../../components";

const Member = () => {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar activeSideBar="overview" />
        <OverviewContent />
      </section>
    </>
  );
};

export default Member;
