import Image from "next/image";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import blackGlovesBox from "../../../public/black-glove-box.jpg";
import blackGloves from "../../../public/black-gloves.jpg";
import blueGlovesBox from "../../../public/blue-glove-box.jpg";
import blueGloves from "../../../public/blue-glove.jpg";
import homeImg from "../../../public/home-page.jpg";

export default function BootstrapCarousel() {
  return (
    <Carousel>
      <div>
        <Image src={blueGloves} alt="" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <Image src={blueGlovesBox} alt="" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <Image src={blackGloves} alt="" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <Image src={blackGlovesBox} alt="" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
    </Carousel>
  );
}
