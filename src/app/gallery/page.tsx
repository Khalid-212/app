"use client";
import HeaderComponent from "@/Components/HeaderComponent";
import ImageCard from "@/Components/ImageCard";
import React from "react";
import Footer from "@/Components/Footer";
import images from "../../data/images";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sumu epoxy resin art maker in Ethiopia Photos",
  description:
    "Here are pictures of our Epoxy resin art products are meticulously crafted to bring out the uniqueness and quality that will captivate your senses.",
};

const Page = () => {
  
  return (
    <div>
      <HeaderComponent />
<br />
<br />
<br />
      <h1 className="text-3xl font-bold text-center mt-16 mb-8">
        Some of Our Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {images.map((image, index) => (
          <ImageCard key={index} pic={image} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
