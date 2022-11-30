import React from "react";
import { Navbar, Footer, FSocials } from "../components";
import { Link } from "react-router-dom";
import BlogImg from "../Assets/blogimg.png";
import StudentBlog from "../Assets/blogstudent.png";

function Blog() {
  return (
    <div>
      <div></div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex md:flex-row flex-col items-center mx-auto px-12">
          <div className="container flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16">
            <h1 className="text-5xl my-6 text-yellow-400 font-bold ">Go2Uni</h1>
            <h3 className="font-bold text-3xl">Educational BLog</h3>
            <p className="my-3 pr-16 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              at duis ac massa pellentesque. Tellus, ornare sapien dis vulputate
              nibh posuere nisi in. Scelerisque sit sit felis, commodo,
              consectetur at nulla sagittis, magnis.
            </p>
          </div>
          <div className="flex flex-row items-center py-6 px-auto">
            <img src={BlogImg} alt="" className="w-[520px] h-[320px]" />
          </div>
        </div>
      </div>
      <div className="p-16 flex flex-col items-center">
        <div>
          <h1 className="font-bold text-3xl">Latest news from Go2Uni</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-2 w-full ">
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={StudentBlog} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-lg font-bold">
                Ways you can use G02Uni to get ready for University
              </h1>
              <p className="text-sm my-2 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <p className="text-base font-bold">16 September, 2022</p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={StudentBlog} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-lg font-bold">
                Ways you can use G02Uni to get ready for University
              </h1>
              <p className="text-sm my-2 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <p className="text-base font-bold">16 September, 2022</p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={StudentBlog} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-lg font-bold">
                Ways you can use G02Uni to get ready for University
              </h1>
              <p className="text-sm my-2 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <p className="text-base font-bold">16 September, 2022</p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={StudentBlog} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-lg font-bold">
                Ways you can use G02Uni to get ready for University
              </h1>
              <p className="text-sm my-2 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <p className="text-base font-bold">16 September, 2022</p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={StudentBlog} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-lg font-bold">
                Ways you can use G02Uni to get ready for University
              </h1>
              <p className="text-sm my-2 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <p className="text-base font-bold">16 September, 2022</p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl border-slate-800 items-center mb-6">
            <img src={StudentBlog} className="w-full h-[250px]" />
            <div className="p-4">
              <h1 className="text-lg font-bold">
                Ways you can use G02Uni to get ready for University
              </h1>
              <p className="text-sm my-2 text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, ut eaque. Voluptas repellendus dicta nemo consectetur
                quos vitae praesentium modi!
              </p>
              <p className="text-base font-bold">16 September, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
        <FSocials />
      </div>
    </div>
  );
}

export default Blog;
