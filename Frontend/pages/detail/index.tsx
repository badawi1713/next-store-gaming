import React from "react";
import {
  Footer,
  Navbar,
  TopUpForm,
  TopUpItem
} from "../../components/organism";

const Detail = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Detail Content --> */}
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <TopUpItem />
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* <!-- Desktop: Game title --> */}
              <TopUpItem type="desktop" />
              <hr />
              <TopUpForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detail;
