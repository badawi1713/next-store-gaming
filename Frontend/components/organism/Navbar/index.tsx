import Image from "next/image";
import React from "react";
import Auth from "./Auth";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/assets/icon/logo.svg" width={60} height={60} />
          </a>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu href={"/"} title="Home" />
              <Menu href={"/games"} title="Games" />
              <Menu href={"/rewards"} title="Rewards" />
              <Menu href={"/discover"} title="Discover" />
              <Menu href={"/global-rank"} title="Global Rank" />
              <Auth />
              
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
