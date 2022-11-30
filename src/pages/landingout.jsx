import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logoteh.png";
import {
  Choose,
  Course,
  Footer,
  HeroOut,
  Newsletter,
  Popsub,
  University,
  FSocials,
} from "../components";

function Landingout() {
  const history = useNavigate;

  return (
    <div>
      <nav className="w-full navbar">
        <div className="container px-8 py-4 flex items-center justify-between border-2 ">
          <div className="flex items-center">
            <img className="w-[49px] h-[44px]" src={logo} alt="logo" />
            <h1 className="text-xl font-bold">GO2UNI</h1>
          </div>

          <div className=" hidden md:flex flex-row items-center  ">
            <div>
              <select className="w-28 text-gray-500 bg-white outline-none appearance-none ">
                <option>Subjects</option>
                <option disabled>English</option>
                <option disabled>Mathematics</option>
                <option disabled>Physics</option>
                <option disabled>Biology</option>
                <option disabled>Chemistry</option>
                <option disabled>Further Math</option>
                <option disabled>Economis</option>
                <option disabled>Commerce </option>
                <option disabled>Agricultural Science </option>
                <option disabled>Geography </option>
                <option disabled>Government </option>
                <option disabled>Geography </option>
              </select>
            </div>
            <div>
              <select className="w-28 text-gray-500 bg-white outline-none appearance-none">
                <option>Courses</option>
                <option disabled>Literature</option>
                <option disabled>Medical Science</option>
                <option disabled>Pharmaceutical Science</option>
                <option disabled>Dentistry</option>
                <option disabled>Physical Science</option>
                <option disabled>Art</option>
                <option disabled>Social Science</option>
                <option disabled>Commerce </option>
                <option disabled>Agriculture </option>
                <option disabled>Education </option>
                <option disabled>Environmental Science </option>
                <option disabled>Health Science and Technology </option>
                <option disabled>Vertinary Medicine </option>
                <option disabled>Biological Science </option>
              </select>
            </div>
            <div>
              <select className=" w-28 text-gray-500 bg-white outline-none appearance-none">
                <option>University</option>
                <option disabled>University of Benin</option>
                <option disabled>University of Ibadan</option>
                <option disabled>Federal University of Technology Minna</option>
                <option disabled>University of Lagos</option>
                <option disabled>University of Iloin</option>
                <option disabled>University of Abuja</option>
                <option disabled>Obafemi Awolowo University</option>
                <option disabled>
                  Federal University of Agriculture, Abeokuta{" "}
                </option>
                <option disabled>Osun state university </option>
                <option disabled>Delta state university </option>
                <option disabled>University of Port Harcourt </option>
              </select>
            </div>
            <div>
              <select className="w-28 text-gray-500 bg-white outline-none appearance-none">
                <option>Exams</option>
                <option disabled>Waec</option>
                <option disabled>Waec Gce</option>
                <option disabled>Neco </option>
                <option disabled>Neco Gce</option>
                <option disabled>Jamb </option>
                <option disabled>Art</option>
                <option disabled>Post Jamb</option>
                <option disabled>A-levels </option>
                <option disabled>Mock Exams </option>
              </select>
            </div>
            <div>
              <select className="w-28 text-gray-500 bg-white outline-none appearance-none">
                <option>Pricing</option>
              </select>
            </div>
            <div>
              <select className="w-28 text-gray-500 bg-white outline-none appearance-none">
                <option>About Us</option>
              </select>
            </div>
          </div>

          <div className="gap-2 mx-5 hidden md:flex">
            <button className="border-2 border-btnColor px-8 py-1 text-btnColor rounded">
              <Link
                to="/signin"
                // onClick={handleLogout}
              >
                Log Out
              </Link>
            </button>
          </div>
        </div>
      </nav>
      <HeroOut />
      <Course />
      <Choose />
      <Popsub />
      <University />
      <Newsletter />
      <Footer />
      <FSocials />
    </div>
  );
}

export default Landingout;
