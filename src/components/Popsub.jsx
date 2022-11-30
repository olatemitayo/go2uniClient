import React from "react";
import { Link } from "react-router-dom";
import Medicine from "../Assets/medicine.png";
import Engineer from "../Assets/engineers.png";
import Accounting from "../Assets/accounting.png";

function Popsub() {
  return (
    <div>
      <div className="container px-12 m-auto">
        <div className="text-5xl my-6 flex flex-col justify-center items-center">
          Most Popular Courses
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 m-auto gap-2 ">
            <div className="rounded-xl shadow-xl border-slate-800 items-center  ">
              <img src={Medicine} className="w-full h-[250px]" />
              <div className="p-4">
                <h1 className="text-xl font-bold">Medicine and Surgery</h1>
                <p className="text-sm my-4 text-slate-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                  quos vitae praesentium modi!
                </p>
              </div>
            </div>
            <div className="rounded-xl shadow-xl border-slate-800 items-center ">
              <img src={Engineer} className="w-full h-[250px]" />
              <div className="p-4">
                <h1 className="text-xl font-bold">Engineering</h1>
                <p className="text-sm my-4 text-slate-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                  quos vitae praesentium modi!
                </p>
              </div>
            </div>
            <div className="rounded-xl shadow-xl border-slate-800 items-center ">
              <img src={Accounting} className="w-full h-[250px]" />
              <div className="p-4">
                <h1 className="text-xl font-bold">Accounting</h1>
                <p className="text-sm my-4 text-slate-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                  quos vitae praesentium modi!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/subject">
          <div className=" text-white  flex flex-col justify-center items-center my-4 p-12">
            <button className="bg-btnColor rounded px-12 py-4 hover:bg-white hover:text-teal-700 border-btnColor border-2 ">
              Explore More
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Popsub;
