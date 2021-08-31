import React from "react";

interface TopUpItemProps {
  type?: "desktop" | "mobile";
}

const TopUpItem = (props: TopUpItemProps) => {
  const { type } = props;

  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          Mobile Legends:
          <br />
          The New Battle 2021
        </h2>
        <p className="text-lg color-palette-2 mb-0">Category: Mobile</p>
      </div>
    );
  }

  return (
    <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
      <div className="row align-items-center">
        <div className="col-md-12 col-4">
          <img
            src="/assets/img/Thumbnail-3.png"
            width="280"
            height="380"
            className="img-fluid"
            alt=""
          />
        </div>
        {/* <!-- Mobile: Game title --> */}
        <div className="col-md-12 col-8 d-md-none d-block">
          <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
            Mobile Legends:
            <br />
            The New Battle 2021
          </h2>
          <p className="text-sm color-palette-2 text-start mb-0">
            Category: Mobile
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopUpItem;
