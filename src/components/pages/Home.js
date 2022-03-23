import React from "react";
import "./Home.css";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "./background_image.jpeg" },
  { url: "./NeAM-New-Year-2.png" },
  { url: "./NeAM-New-Year-2.png" },
];

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-div">
          <h1 className="welcome-h1">
            Welcome to Nepalese Association of Michigan
          </h1>
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>
      </div>
    </>
  );
}
