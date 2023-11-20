'use client';

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";

function HeaderComponent() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 my-2">
        <div className="headerLeft mb-4 md:mb-0">
          <div className="logo">
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
        </div>
        <div className="font-bold text-lg flex flex-col md:flex-row gap-4 items-center">
          {/* Hamburger menu icon */}
          <div className="cursor-pointer md:hidden" onClick={toggleNav}>
            <div className={`hamburger-bar ${isNavOpen ? "open" : ""}`}></div>
            <div className={`hamburger-bar ${isNavOpen ? "open" : ""}`}></div>
            <div className={`hamburger-bar ${isNavOpen ? "open" : ""}`}></div>
          </div>

          {/* Navigation links */}
          <div
            className={`md:flex flex-col md:flex-row md:gap-4 items-center ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/">
              <div className="nav-link" onClick={() => setIsNavOpen(false)}>
                Home
              </div>
            </Link>
            <Link href="/gallery">
              <div className="nav-link" onClick={() => setIsNavOpen(false)}>
                Gallery
              </div>
            </Link>
            <Link href="/courses">
              <div className="nav-link" onClick={() => setIsNavOpen(false)}>
                Courses
              </div>
            </Link>
            <Link href="/contact">
              <div className="nav-link" onClick={() => setIsNavOpen(false)}>
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
