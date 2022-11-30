import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { Navbar, Footer, FSocials, NavbarOut } from "../components";
import Facebook from "../Assets/Facebookimg.png";
import Google from "../Assets/Google - png.png";

function Signin() {
  const history = useNavigate;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("https://edtechserver.onrender.com/api/signin", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send HTTP request
    sendRequest().then(() => {
      // history("/landingout");
      window.location = "/landingout";
    });
  };

  return (
    <div className="flex flex-col items-center">
      <NavbarOut />
      <div className="flex flex-col md:w-1/2 md:items-center justify-center align-middle">
        <div className="flex flex-col sm:w-full md:max-w-full items-center content-center my-8">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="border-2 border-black w-full rounded-lg flex items-center justify-center my-2 px-24 py-3 font-bold relative">
            <img
              src={Google}
              alt=""
              className="flex justify-start absolute top-3 left-5"
            />
            <a href="http://">Continue with Google</a>
          </div>
          <div className="border-2 border-black w-full rounded-lg flex items-center justify-center my-2 px-20 py-3 font-bold relative">
            <img
              src={Facebook}
              alt=""
              className="flex justify-start absolute top-3 left-5"
            />
            <a href="http://">Continue with Facebook</a>
          </div>
        </div>

        <p className="flex flex-col items-center font-semibold my-2">or</p>

        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border-2 border-black w-full py-3 px-4 flex rounded-lg my-4 font-bold"
          />

          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="border-2 border-black w-full py-3 px-4 flex rounded-lg mt-4 font-bold"
          />
          <label htmlFor="" className="flex justify-end ">
            <a href="http://">Forgot password?</a>
          </label>

          <div className=" bg-btnColor w-full rounded-lg flex items-center justify-center my-6 px-20 py-3 font-bold relative">
            <button className="text-white" onClick={handleSubmit}>
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="w-full">
        <Footer />
        <FSocials />
      </div>
    </div>
  );
}

export default Signin;
