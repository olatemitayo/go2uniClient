import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../Assets/herologo.png";

const Hero = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col items-center m-auto p-12 ">
        <div className="container flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16">
          <h1 className="text-5xl my-6 ">
            Learn for preparation of exams to University
          </h1>
          <p className="my-3 pr-12 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at
            duis ac massa pellentesque. Tellus, ornare sapien dis vulputate nibh
            posuere nisi in. Scelerisque sit sit felis, commodo, consectetur at
            nulla sagittis, magnis.
          </p>
          <div className="my-8 flex  flex-col items-center md:gap-6 md:flex-row  md:items-start ">
            <Link to="/register">
              <button className="bg-btnColor font-semibold hover:bg-white hover:text-teal-700 bg-btnColor border-2 my-4 px-20 py-3 md:mx-2    border-btnColor text-white rounded">
                Get Started
              </button>
            </Link>
            <Link to="/signin">
              <button className="font-semibold hover:bg-btnColor hover:border-btnColor hover:text-white border-2 my-4 border-btnColor md:mx-2 px-20 py-3 text-btnColor rounded">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center py-6 px-4">
          <img src={HeroImg} alt="" className="w-[520px] h-[320px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
