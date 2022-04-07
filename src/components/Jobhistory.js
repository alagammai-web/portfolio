import React from "react";

const Jobhistory = () => {
  return (
    <section id="history" className="py-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mx-auto "
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <h2 className="capitalize text-white text-4xl font-semibold antialiased text-center">
        Job History
      </h2>
      <div className="col-sm-12 pr-4 pl-4">
        <div className="col-md-4 offset-md-4 mx-auto py-5 px-4 bg-gray-800 my-5 text-white">
          <ul className="history">
            <li className="mb-4 leading-10">
              <span className="font-semibold text-xl text-emerald-400">
                2016 - 2020
              </span>
              <div>
                <h4 className="text-lg mb-1 text-gray-400">UI Developer</h4>
                <p className="text-lg">Nexborg Software Solutions Pvt Ltd</p>
              </div>
            </li>
            <li className="mb-4 leading-10">
              <span className="font-semibold text-xl text-emerald-400">
                2020 - PRESENT
              </span>
              <div>
                <h4 className="text-lg mb-1 text-gray-400">UI Developer</h4>
                <p className="text-lg">T2S Software Solutions Pvt Ltd.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Jobhistory;
