import React, { useState } from "react";
// import { Tabs } from "react-bootstrap";
// import { Tab } from "react-bootstrap";
import { projectsdata } from "./data";

const Projects = () => {
  // state
  const [showResultsservice, setShowResultsservice] = useState(true);
  const [showResultsproduct, setShowResultsproduct] = useState(false);
  const [showResultsmobile, setShowResultsnmobile] = useState(false);

  const clickTab = () => {
    // alert("sdsdsd");
    setShowResultsservice(true);
    setShowResultsproduct(false);
    setShowResultsnmobile(false);
  };

  const prodclick = () => {
    setShowResultsproduct(true);
    setShowResultsservice(false);
    setShowResultsnmobile(false);
  };

  const mobileclick = () => {
    setShowResultsnmobile(true);
    setShowResultsproduct(false);
    setShowResultsservice(false);
  };

  // function clickTab() {
  //   alert("sdsdsd");
  // }
  return (
    <section id="projects" className="py-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
        content-center
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
      <h2 className="capitalize text-white text-4xl font-semibold antialiased text-center">
        Projects
      </h2>
      <div className="projects col-8 mx-auto mt-10">
        <ul className="list-inline flex text-white font-medium text-xl mb-5 border-b-2 border-emerald-500">
          <li className="mr-0 border-r-2 border-green-400 flex items-center">
            <span
              className={
                showResultsservice
                  ? "p-3 hover:text-white bg-emerald-400 p-2  mr-0 inline-block align-center pointer"
                  : "p-3 hover:text-white pointer"
              }
              onClick={() => clickTab()}
            >
              Service
            </span>
          </li>
          <li className="mr-0 border-r-2 border-green-400 flex items-center">
            <span
              className={
                showResultsproduct
                  ? "p-3 hover:text-white bg-emerald-400 p-2  mr-0 inline-block align-center"
                  : "p-3 hover:text-white"
              }
              onClick={() => prodclick()}
            >
              Product
            </span>
          </li>
          <li className="mr-5 flex items-center">
            <span
              className={
                showResultsmobile
                  ? "p-3 hover:text-white bg-emerald-400 p-2  mr-2 inline-block align-center"
                  : "p-3 hover:text-white"
              }
              onClick={() => mobileclick()}
            >
              Mobile
            </span>
          </li>
        </ul>

        {projectsdata.map((resp) => (
          <>
            {showResultsservice
              ? resp.categorytitle === "Service Website" && (
                  <div className="row">
                    {/* <h1 className="text-white">{resp.categorytitle}</h1> */}
                    {resp.webnames.map((dat) => (
                      <div className="col-6 text-white">
                        <img src={dat.image} alt="" />
                        {/* <p className="text-white">{dat.link}</p> */}
                        <p className="text-white font-base text-xl bg-gray-800 mb-5">
                          <a
                            href={dat.link}
                            className="p-3 block hover:text-white"
                            target="_blank"
                          >
                            {dat.title}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                )
              : null}

            {showResultsproduct
              ? resp.categorytitle === "Product Website" && (
                  <div className="row">
                    {/* <h1 className="text-red-500">{resp.categorytitle}</h1> */}
                    {resp.webnames.map((dat) => (
                      <div className="col-6 text-white">
                        <img src={dat.image} alt="" />
                        {/* <p className="text-white">{dat.link}</p> */}
                        <p className="text-white font-base text-xl  bg-gray-800 mb-5">
                          <a
                            href={dat.link}
                            className="p-3 block hover:text-white"
                          >
                            {dat.title}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                )
              : null}

            {showResultsmobile
              ? resp.categorytitle === "Mobile Application" && (
                  <div className="row mobile">
                    {/* <h1 className="text-emerald-500">{resp.categorytitle}</h1> */}
                    {resp.webnames.map((dat) => (
                      <div className="col-3 text-white">
                        <img src={dat.image} alt="" />
                        {/* <p className="text-white"></p> */}
                        <p className="text-white font-base text-xl  bg-gray-800">
                          <a
                            href={dat.link}
                            className="p-3 block hover:text-white"
                          >
                            {dat.title}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                )
              : null}
          </>
        ))}
      </div>
    </section>
  );
};
export default Projects;
