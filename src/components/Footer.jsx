import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-24">

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">
            Victor<span className="text-blue-500">.</span>
          </h1>

          <p className="text-gray-400 mt-2 max-w-sm">
            Building modern web experiences with clean UI and scalable code.
          </p>
        </div>

        {/* Newsletter */}
        {/* <div className="text-center md:text-left ">
          <h2 className="text-lg font-semibold mb-3">
            Subscribe to my newsletter
          </h2>

          <form className="flex flex-col sm:flex-row gap-2 border border-gray-700 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md sm:rounded-r-none text-black outline-none w-full sm:w-auto"
            />

            <button
              className="bg-white text-black px-5 py-3 rounded-md sm:rounded-l-none hover:bg-gray-200 transition"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div> */}
        
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2026 Victor. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;