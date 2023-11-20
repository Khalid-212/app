import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PropertyCardProps {
  pic: StaticImageData;
  text: string;
  title: string;
  lm: boolean;
}

function PropertyCard({ pic, text, title, lm }: PropertyCardProps) {
  return (
    <div>
      <div className="property m-3 w-45 text-sm">
        {pic ? (
          <Image src={pic} alt="sectionLeft" width={50} height={50} />
        ) : (
          <div className="w-10 h-10 bg-black"></div>
        )}
        {/* <Image src={pic} alt="sectionRight" width={50} height={50} /> */}
        {/* <Image src={pic} alt="sectionRight" width={50} height={50} /> */}
        <h3 className="text-base font-bold">{title}</h3>
        <br />
        <p>{text}</p>
        <br />
        {lm && (
          <Link href="/gallery">
            <p>Learn more &gt;</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PropertyCard;
