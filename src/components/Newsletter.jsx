import React from "react";
import Newsletters from "../Assets/newsletter.png";

function Newsletter() {
  return (
    <div className="container m-auto p-12">
      <div className=" flex flex-col md:flex-row  justify-around items-center ">
        <div className="flex flex-col mdflex-row">
          <img className="w-full h-[250px] " src={Newsletters} alt="" />
        </div>
        <div className="flex-col items-center content-center">
          <h1 className="text-4xl font-bold my-4">
            Subscribe to our newsletter
          </h1>
          <p className="text-sm my-4 text-slate-500">
            Receive articles directly in your inbox. <br />
            Fill your email below to jon our newsletter today
          </p>
          <form className="w-full md:flex  md:flex-row md:my-4">
            <div>
              <input
                type="email"
                name=""
                id=""
                placeholder='enter your email'
                className="border-2 border-black px-4 w-[20rem] py-2 mx-auto mb-3 md:px-4 "
              />
            </div>
            <div>
              <button className="bg-btnColor border-2 hover:bg-white hover:text-teal-700 border-btnColor border-btnColor px-8 py-2 mb-3 md:ml-5 text-white rounded">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
