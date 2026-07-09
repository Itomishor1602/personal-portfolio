import React from "react";
import heroImageFour from "../assets/heroImageFour.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 px-6 md:px-24 gap-12 bg-white text-black dark:bg-black dark:text-white">

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">

        <h1 className=" text-xl md:text-6xl lg:text-4.5xl font-bold mb-4">
          Turning <span className="text-blue-400">ideas</span> into clean, interactive web apps.
        </h1>

        <p className="text-gray-700 dark:text-gray-300 md:text-xl lg:text-xl max-w-xl">
          I design and build beautiful, user-friendly interfaces that turn ideas into real digital products.
        </p>

        {/* CTA Button (important for portfolio conversion) */}
        <div className="mt-6">
          <a
            href="#projects"  
            className="inline-block dark:bg-gray-800 bg-transparent border border-gray-700 px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            View My Projects
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroImageFour}
          alt="Hero"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl"
        />
      </div>

    </div>
  );
};

export default Hero;