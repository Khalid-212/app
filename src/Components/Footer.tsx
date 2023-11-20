import React from "react";
import facebook from "../../public/assets/fb.png";
import instagram from "../../public/assets/ig.png";
import telegram from "../../public/assets/tg.png";
import tiktok from "../../public/assets/tiktok.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="flex items-center mt-20 text-sm gap-3 justify-between mx-4 h-10 border-t-2 border-gray-500">
        <div className="ml-5">
          @2021 Sumu Resin Art
          {/* | All Rights Reserved Privacy Policy | Terms of Use */}
          {/* | Accessibility */}
        </div>
        <div className="flex gap-5">
          <div>
            <Link href="https://www.facebook.com/profile.php?id=100063553705019">
              <Image src={facebook} alt="Facebook" width={25} height={25} />
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/sumu_resin_art_/">
              <Image src={instagram} alt="Instagram" width={25} height={25} />
            </Link>
          </div>
          <div>
            <Link href="https://t.me/sumuartswerk">
              <Image src={telegram} alt="Telegram" width={25} height={25} />
            </Link>
          </div>
          <div>
            <Link href="https://www.tiktok.com/@sumuresinart88?is_from_webapp=1&sender_device=pc">
              <Image src={tiktok} alt="TikTok" width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-2">
        Developed by{" "}
        <a className="text-blue-600" href="https://khalidibrahim.co/">
          Khalid Ibrahim
        </a>
      </div>
    </div>
  );
}

export default Footer;
