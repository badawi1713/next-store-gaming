import React from "react";
import { GameItem } from "../..";

const gameData = [
  {
    id: "1",
    title: "Valoran",
    platform: "Desktop",
    image: "/assets/img/Thumbnail-1.png",
  },
  {
    id: "2",
    title: "Call of Duty: Modern",
    platform: "Mobile",
    image: "/assets/img/Thumbnail-2.png",
  },
  {
    id: "3",
    title: "Mobile Legends",
    platform: "Mobile",
    image: "/assets/img/Thumbnail-3.png",
  },
  {
    id: "4",
    title: "Clash of Crash",
    platform: "Mobile",
    image: "/assets/img/Thumbnail-4.png",
  },
  {
    id: "5",
    title: "LoL: Wild Rift",
    platform: "Mobile",
    image: "/assets/img/Thumbnail-5.png",
  },
];

const FeaturedBanner = () => {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameData.map((item) => (
            <GameItem
              key={item.id}
              id={item.id}
              title={item.title}
              platform={item.platform}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
