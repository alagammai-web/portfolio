import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <h2 className="capitalize text-white text-4xl font-semibold antialiased text-center">
        Contact Us
      </h2>
      <div class="col-8 mx-auto flex mt-5 text-center">
        <div class="col-4 text-center text-white bg-gray-800 mr-4 text-xl p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 mx-auto stroke-green-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
          <a
            href="mailto:alagammain12@gmail.com"
            className="mt-3 text-white hover:text-white"
          >
            alagammain12@gmail.com
          </a>
        </div>
        <div class="col-4 text-center text-white bg-gray-800 mr-4 text-xl p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 mx-auto stroke-green-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a href="tel:8610185660" className="mt-3 text-white hover:text-white">
            8610185660
          </a>
        </div>
        <div class="col-4 text-center text-white bg-gray-800 mr-4 text-xl p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 mx-auto stroke-green-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Chennai, Tamilnadu
        </div>
      </div>

      <div className="social col-8 mx-auto">
        <div className="footer-social flex mx-auto justify-center mt-5">
          <a href="https://www.linkedin.com/in/alagammai-narayanan-0a618475/">
            <i class="lab la-linkedin-in text-green-400 font-medium text-3xl mr-4"></i>
          </a>
          <a href="https://github.com/alagammai-web">
            <i class="lab la-github text-green-400 font-medium text-3xl mr-4"></i>
          </a>
          <a href="https://www.facebook.com/alagammai03">
            <i class="lab la-facebook text-green-400 font-medium text-3xl mr-4"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
