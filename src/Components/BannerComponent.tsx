import Image from "next/image";
import React from "react";
import banner from "../../public/assets/banner.jpg";

function BannerComponent() {
  return (
    <div>
      <div
        className="banner w-100"
        style={{
          width: "100%",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <div className="heading">
          <h1>
            Unleash Beauty
            <br />
            With Epoxy
            <br />
            Resin Art
          </h1>
          <p className="text-white pl-20 pb-10">
            welcome to the world of mesmerising epoxy resin art. Get ready to be
            <br />
            captivated by the beauty and uniqueness of our creations
          </p>
        </div>
        <div className="buttons pl-20 flex gap-10">
          <button className="btn text-white border-red-50 border-2 p-3 w-32">
            Explore
          </button>
          <button className="btn bg-black text-white p-3 w-32">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
