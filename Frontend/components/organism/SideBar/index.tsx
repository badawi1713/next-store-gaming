import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import SideBarItem from "./SideBarItem";

interface SideBarProps {
  activeSideBar: "overview" | "transactions" | "settings";
}

const SideBar = ({ activeSideBar }: SideBarProps) => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <SideBarItem
            active={activeSideBar === 'overview'}
            href="/member"
            icon="/assets/icon/ic-overview.svg"
            title="Overview"
          />
          <SideBarItem
            active={activeSideBar === 'transactions'}
            href="/member/transactions"
            icon="/assets/icon/ic-transaction.svg"
            title="Transactions"
          />
          <SideBarItem
            href="/member"
            icon="/assets/icon/ic-messages.svg"
            title="Messages"
          />
          <SideBarItem
            href="/member"
            icon="/assets/icon/ic-card.svg"
            title="Card"
          />
          <SideBarItem
            href="/member"
            icon="/assets/icon/ic-rewards.svg"
            title="Rewards"
          />
          <SideBarItem
            active={activeSideBar === 'settings'}
            href="/member/edit-profile"
            icon="/assets/icon/ic-settings.svg"
            title="Settings"
          />
          <SideBarItem
            href="/"
            icon="/assets/icon/ic-logout.svg"
            title="Logout"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default SideBar;
