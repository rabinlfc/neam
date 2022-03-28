import React from "react";
import "./Home.css";
import SimpleImageSlider from "react-simple-image-slider";
import newYear from './NeAM-New-Year-2.png'
import eng from './eng.jpg'

const images = [
  {url: eng},
  { url: newYear },
  
];
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-div">
          <h1 className="welcome-h1">
            Welcome to Nepalese Association of Michigan
          </h1>
          <div className="home-image-slider">
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={false}
          />
          </div>
        </div>
      </div>
    </>
  );
}
