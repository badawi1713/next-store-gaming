import React from "react";
import { SideBar, TransactionContent } from "../../../components";

const Transactions = () => {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeSideBar="transactions" />
      <TransactionContent />
    </section>
  );
};

export default Transactions;
