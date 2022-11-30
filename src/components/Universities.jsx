import React from "react";
import Logoone from "../Assets/logo1.png";
import Logotwo from "../Assets/logo2.png";
import Logothree from "../Assets/logo3.png";
import Logofour from "../Assets/logo4.png";
import Logofive from "../Assets/logo5.png";
import Logosix from "../Assets/logo6.png";
import Logosev from "../Assets/logo7.png";
import Logoeig from "../Assets/logo8.png";
import Logonine from "../Assets/logo9.png";
import Logoten from "../Assets/logo10.png";
import Logoele from "../Assets/logo11.png";
import Logotwe from "../Assets/logo12.png";

function Universities() {
  return (
    <div className="bg-uniBg container mx-auto p-12 hidden md:flex md:flex-col">
      <div>
        <h1 className="text-5xl py-2 flex flex-col justify-center items-center">
          We collaborate with leading universities
        </h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <img src={Logoone} alt="" className=" w-[100px] h-[100px] m-10" />
        <img src={Logotwo} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logothree} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logofour} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logofive} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logosix} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logosev} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logoeig} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logonine} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logoten} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logoele} alt="" className="w-[100px] h-[100px] m-10" />
        <img src={Logotwe} alt="" className="w-[100px] h-[100px] m-10" />
      </div>
    </div>
  );
}

export default Universities;
