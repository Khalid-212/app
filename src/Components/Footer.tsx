import React from "react";
import facebook from "../../public/assets/fb.png";
import instagram from "../../public/assets/ig.png";
import telegram from "../../public/assets/tg.png";
import tiktok from "../../public/assets/tiktok.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex text-sm gap-3 justify-between m-auto w-10/12 h-10 border-t-2 border-gray-500 ">
      <div className="ml-5">
        @2021 Sumu Resin Art
        {/* | All Rights Reserved Privacy Policy | Terms of Use */}
        {/* | Accessibility */}
      </div>
      <div className="flex cursor-pointer  gap-5">
        <div className="">
          <Image src={facebook} alt="fb" width={25} height={25} />
        </div>
        <div className="">
          <Image src={instagram} alt="" width={25} height={25} />
        </div>
        <div className="">
          <Image src={telegram} alt="" width={25} height={25} />
        </div>
        <div className="">
          <Image src={tiktok} alt="" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
