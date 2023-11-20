import Image from "next/image";
import React from "react";
import banner from "../../public/assets/banner.jpg";
import Link from "next/link";

function BannerComponent() {
  return (
    <div>
      <div className="banner w-full bg-black h-screen flex flex-col justify-center items-start text-white">
        <div className="heading text-left pl-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl sm:text-3xl">
            Unleash Beauty
            <br />
            With Epoxy
            <br />
            Resin Art
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg pl-4 pb-4 lg:ml-20 md:pb-10">
            Welcome to the world of mesmerizing epoxy resin art. Get ready to be
            <br />
            captivated by the beauty and uniqueness of our creations
          </p>
        </div>
        <div className="buttons pl-4 flex flex-col md:flex-row gap-4 lg:ml-20 md:gap-10">
            <Link href="/gallery">
          <button className="btn text-white border-red-50 border-2 p-2 md:p-3 w-full md:w-32">
            Explore
          </button>
          </Link>
          <button className="btn bg-black text-white p-2 md:p-3 w-full md:w-32">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
