import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png"

function HeaderComponent() {
  return (
    <div>
      <div className="flex justify-between	align-baseline ">
        <div className="headerLeft">
          <div className="logo ml-6 mt-2 ">
            <Image className="ml-20" src={logo} alt="logo" width={100} height={100}/>
          </div>
        </div>
        <div className=" font-bold text-lg flex m-5 mr-52 gap-32 items-center	">
            <nav>Home</nav>
            <nav>Gallery</nav>
            <nav>Courses</nav>
            <nav>Contact</nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
