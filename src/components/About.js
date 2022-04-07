import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="container flex px-10 py-10">
        <div className="row">
          <div className="col-md-6 py-20">
            <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white">
              Hi, I'm Alagammai Narayanan.
              <br className="hidden lg:inline-block pt-2 " />
              <span className="pt-1 inline-block">Frontend Developer.</span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400 text-lg">
              I'm a UI developer with 5+ years of experience in building service
              and product based websites. Motivated and self-learner able to
              manage a project and deliver the best user experience by combining
              the latest web technologies.
            </p>
            <div className="buttons">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
              <a
                href="./images/Alagammai Narayanan(UI Developer).docx"
                download=""
                className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="./images/portfolio-1-min-0.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
