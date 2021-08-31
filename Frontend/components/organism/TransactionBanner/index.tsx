import Image from "next/image";
import React from "react";
import BannerCard from "./BannerCard";

const items = [
  {
    title: "1. Start",
    paragraph1: "Pilih salah satu game",
    paragraph2: "yang ingin kamu top up",
    url: "/assets/icon/start.svg",
  },
  {
    title: "2. Fill Up",
    paragraph1: "Top up sesuai dengan",
    paragraph2: "nominal yang sudah tersedia",
    url: "/assets/icon/fill-up.svg",
  },
  {
    title: "3. Be a Winner",
    paragraph1: "Siap digunakan untuk",
    paragraph2: "improve permainan kamu",
    url: "/assets/icon/winner.svg",
  },
];

const TransactionBanner = () => {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {items.map((item) => (
            <BannerCard
              key={item.title}
              paragraph1={item.paragraph1}
              paragraph2={item.paragraph2}
              title={item.title}
              image={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionBanner;
