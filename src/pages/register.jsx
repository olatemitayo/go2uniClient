import React, { useState } from "react";
import { Footer, FSocials, NavbarOut } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Facebook from "../Assets/Facebookimg.png";
import Google from "../Assets/Google - png.png";

const Register = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
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
      .post("https://edtechserver.onrender.com/api/register", {
        fullName: inputs.fullName,
        email: inputs.email,
        password: inputs.password,
      })

      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(res);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send HTTP request
    sendRequest().then(() => {
      history("/signin");
    });
  };

  return (
    <div className="flex flex-col items-center">
      <NavbarOut />
      <div className="flex flex-col md:w-1/2 md:items-center justify-center align-middle px-12">
        <div className="flex flex-col sm:w-full md:max-w-full items-center content-center my-8 ">
          <h1 className="text-3xl font-bold">Sign up and start learning</h1>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="border-2 border-black w-full rounded-lg flex items-center justify-center my-2 px-6  py-3 font-bold relative">
            <img
              src={Google}
              alt=""
              className="flex justify-start absolute top-3 left-5"
            />
            <a href="http://">Continue with Google</a>
          </div>
          <div className="border-2 border-black w-full rounded-lg flex items-center justify-center my-2 px-6 py-3 font-bold relative">
            <img
              src={Facebook}
              alt=""
              className="flex justify-start absolute top-3 left-5"
            />
            <a href="http://">Continue with Facebook</a>
          </div>
        </div>

        <p className="flex flex-col items-center my-6">or</p>

        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="fullname" className="font-semibold ">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullName"
            onChange={handleChange}
            value={inputs.fullName}
            required
            placeholder="Enter your Fullname"
            className="border-2 border-black w-full py-3 px-4 flex rounded-lg my-2 font-bold"
          />

          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
            required
            placeholder="Enter your email"
            className="border-2 border-black w-full py-3 px-4 flex rounded-lg my-2 font-bold"
          />

          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={inputs.password}
            required
            placeholder="Enter password"
            className="border-2 border-black w-full py-3 px-4 flex rounded-lg my-2 font-bold"
          />

          <div className="flex flex-row gap-3 my-2">
            <input type="checkbox" name="" id="agree" />

            <label htmlFor="agree" className="flex justify-start ">
              I agree to the terms and condition
            </label>
          </div>

          <div className=" bg-btnColor w-full rounded-lg flex items-center justify-center my-6 px-20 py-3 font-bold relative">
            <button type="submit" className="text-white">
              Sign Up
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
};

export default Register;
