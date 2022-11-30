import React from "react";
import Card from "../Assets/card.png";
import Learning from "../Assets/learning.png";
import Support from "../Assets/support.png";

function Choose() {
  return (
    <div className="my-20">
      <div className="container px-12 m-auto ">
        <div className="m-10">
          <h2 className="text-3xl font-bold  flex flex-col justify-center items-center">
            Why Choose Go2Uni?
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center text-center mt-3">
            <img src={Card} alt="" />
            <h2 className="font-bold py-2">Easy access</h2>
            <p className="text-sm mt-4 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              possimus tempora porro earum incidunt quasi.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center mt-6">
            <img src={Learning} alt="" />
            <h2 className="font-bold py-2">Flexible Learning</h2>
            <p className="text-sm my-4 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              possimus tempora porro earum incidunt quasi.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center mt-6">
            <img src={Support} alt="" />
            <h2 className="font-bold py-2">24/7 Student support</h2>
            <p className="text-sm my-4 text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              possimus tempora porro earum incidunt quasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
