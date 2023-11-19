import Image from 'next/image';
import React from 'react'

function PropertyCard({ pic, text, title,lm }) {
  return (
    <div>
      <div className="property m-3 w-45 text-sm">
        {pic && <Image src={pic} alt="sectionRight" width={50} height={50} />}
        {/* <Image src={pic} alt="sectionRight" width={50} height={50} /> */}
        <h3 className="text-base font-bold">{title}</h3>
        <br />
        <p>{text}</p>
        <br />
        {lm && <p>Learn more &gt;</p>}
      </div>
    </div>
  );
}

export default PropertyCard
