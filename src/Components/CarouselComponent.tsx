'use client';

import React,{useState} from 'react'
import Image from 'next/image';
import Carousel from "nuka-carousel";
import c4 from "../../public/assets/c4.jpg"
import c5 from "../../public/assets/c5.jpg"
import c6 from "../../public/assets/c6.jpg"
import c7 from "../../public/assets/c7.png"
import c3 from "../../public/assets/c3.jpg"


function CarouselComponent() {
  return (
    <div className="">
      <Carousel autoplay wrapAround>
        <Image alt="image 1" src={c3} />
        <Image alt="image 2" src={c4} />
        <Image alt="image 3" src={c5} className="m-auto" />
        <Image alt="image 4" src={c6} className="m-auto" />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
