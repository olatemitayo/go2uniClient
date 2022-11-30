import React from "react";

import { Course, Footer, Navbar, FSocials } from "../components";

function Subject() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-subjectBg p-12">
        <h1 className="font-bold text-4xl mb-8">Search our catalog</h1>
        <form action="">
          <input
            type="text"
            className="px-4 w-[20rem] py-2 mr-3 mb-3 md:mb-0"
          />
          <button className="bg-btnColor border-2 border-btnColor px-10 py-2 text-white rounded">
            Search
          </button>
        </form>
      </div>
      <div className="my-12">
        <Course />
      </div>
      <div>
        <Footer />
        <FSocials />
      </div>
    </div>
  );
}

export default Subject;
