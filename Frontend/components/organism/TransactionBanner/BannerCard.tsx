import React from "react";

interface BannerItemProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  image: string;
}

const BannerCard = ({ title, paragraph1, paragraph2, image }: BannerItemProps) => {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
          <img
            alt={"icon-step"}
            className="mb-30 mx-auto"
            src={image}
            width={80}
            height={80}
          />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {paragraph1}
          <br />
          {paragraph2}
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
