import React from "react";
import {
  Choose,
  Course,
  Footer,
  Hero,
  Newsletter,
  Popsub,
  University,
  FSocials,
  NavbarOut,
} from "../components";

const Landing = () => {
  return (
    <>
      <NavbarOut />
      <Hero />
      <Course />
      <Choose />
      <Popsub />
      <University />
      <Newsletter />
      <Footer />
      <FSocials />
    </>
  );
};

export default Landing;
