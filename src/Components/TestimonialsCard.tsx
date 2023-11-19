import Image from 'next/image'
import React from 'react'
import star from "../../public/assets/star-black.png";

function TestimonialsCard() {
  return (
    <div className="m-5 w-96">
      <div className="start flex">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Image
            src={star}
            alt="sectionRight"
            width={20}
            height={20}
            key={index}
          />
        ))}
      </div>
        <br />
      <p className='font-bold'>
        The epoxy resin art is simply amazing! I love how it adds a unique touch
        to my home decor{" "}
      </p>
      <div className="user flex gap-2 items-center">
        <div className="user-image rounded-full w-10 bg-slate-300 h-10"></div>
        <div className="user-info">
          <h3>John Doe</h3>
          <h4>CEO of Company</h4>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard
