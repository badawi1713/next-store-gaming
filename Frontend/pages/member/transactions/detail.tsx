import React from "react";
import { SideBar, TransactionDetailContent } from "../../../components";

const Detail = () => {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar activeSideBar="transactions" />
      <TransactionDetailContent />
    </section>
  );
};

export default Detail;
