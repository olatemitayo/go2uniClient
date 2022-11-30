import React from "react";
import { Link } from "react-router-dom";
import English from "../Assets/english.png";
import Mathematics from "../Assets/mathematics.png";
import Physics from "../Assets/physics.png";
import Agriculture from "../Assets/agriculture.png";
import Economics from "../Assets/economicsimg.png"
import Chemistry from "../Assets/chemistryimg.png"

function Course() {
  return (
    <div>
      <div className="container px-12 m-auto">
        <div className="text-5xl m-auto mb-6 flex justify-center items-center ">
          Pick a subject and start learning
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-auto gap-2 w-full">
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={English} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-xl font-bold">English</h1>
              <p className="text-sm my-4 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <div className="flex justify-between items-center mt-10">
                <h1 className="font-bold">N1,000</h1>
                <button className='bg-btnColor hover:bg-white hover:text-teal-700 px-4 py-1 border-btnColor border-2 text-white rounded'>Buy</button>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={Chemistry} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-xl font-bold">Chemistry</h1>
              <p className="text-sm my-4 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <div className="flex justify-between items-center mt-10">
                <h1 className="font-bold">N1,000</h1>
                <button className='bg-btnColor hover:bg-white hover:text-teal-700 px-4 py-1 border-btnColor border-2 text-white rounded'>Buy</button>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6 ">
            <img src={Mathematics} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-xl font-bold">Mathematics</h1>
              <p className="text-sm my-4 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <div className="flex justify-between items-center mt-10">
                <h1 className="font-bold">N1,000</h1>
                <button className='bg-btnColor hover:bg-white hover:text-teal-700 px-4 py-1 border-btnColor border-2 text-white rounded'>Buy</button>
              </div>
             </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={Economics} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-xl font-bold">Economics</h1>
              <p className="text-sm my-4 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <div className="flex justify-between items-center mt-10">
                <h1 className="font-bold">N1,000</h1>
                <button className='bg-btnColor hover:bg-white hover:text-teal-700 px-4 py-1 border-btnColor border-2 text-white rounded'>Buy</button>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={Physics} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-xl font-bold">Physics</h1>
              <p className="text-sm my-4 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <div className="flex justify-between items-center mt-10">
                <h1 className="font-bold">N1,000</h1>
                <button className='bg-btnColor hover:bg-white hover:text-teal-700 px-4 py-1 border-btnColor border-2 text-white rounded'>Buy</button>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={Agriculture} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-xl font-bold">Agriculture</h1>
              <p className="text-sm my-4 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <div className="flex justify-between items-center mt-10">
                <h1 className="font-bold">N1,000</h1>
                <button className='bg-btnColor hover:bg-white hover:text-teal-700 px-4 py-1 border-btnColor border-2 text-white rounded'>Buy</button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/subject">
          <div className=" text-white  flex flex-col justify-center items-center mt-6 ">
            <button className="bg-btnColor hover:bg-white hover:text-teal-700 border-btnColor border-2 bg-btnColor rounded px-12 py-4">
              Explore More
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Course;
