import React from "react";
import { footerLinks, company, support } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container  bg-footerBg text-white">
      <div className="flex flex-col md:flex-row mx-auto px-16 py-8">
        <div className="flex flex-col sm:w-full md:w-2/4">
          <h1 className="text-3xl font-bold mb-4">Go2uni</h1>
          <p className=" md:pr-16">
            Join the more than 100,000 studnts to study and prepare for
            universities.
          </p>
        </div>
        <div className="grid grid-cols-2 my-4 md:my-0 md:flex  md:gap-32 items-start ">
          <div className="flex flex-col sm:my-6 md:my-0">
            <h3 className="text-white font-semibold text-lg mb-4 ">Explore</h3>
            <ul>
              {footerLinks.map((footer) => (
                <li
                  className="links cursor-pointer text-white text-sm mb-2"
                  key={footer.id}
                >
                  {footer.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul>
              {company.map((coy) => (
                <li
                  className="links cursor-pointer text-white text-sm mb-2"
                  key={coy.id}
                >
                  <Link to={coy.route}>{coy.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul>
              {support.map((sup) => (
                <li
                  className="links cursor-pointer text-white text-sm mb-2"
                  key={sup.id}
                >
                  {sup.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
