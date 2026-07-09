import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenRuler,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white py-10 px-6 md:px-24 text-center">

      <div className="mb-10">
        <h1 className="font-bold text-3xl">Services</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          What I can do for you?
        </p>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Web Dev */}
        <div className="border border-gray-700 rounded-2xl p-6 hover:scale-105 transition duration-300">
          <FontAwesomeIcon icon={faCode} className="text-4xl mb-4 text-blue-400" />
          <h2 className="py-2 text-xl font-semibold">Web Development</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Building responsive and modern websites using React, Tailwind, and Node.js.
          </p>
        </div>

        {/* UI/UX */}
        <div className="border border-gray-700 rounded-2xl p-6 hover:scale-105 transition duration-300">
          <FontAwesomeIcon icon={faPenRuler} className="text-4xl mb-4 text-pink-700" />
          <h2 className="py-2 text-xl font-semibold">UI/UX Design</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Designing clean, user-friendly interfaces in Figma and modern design systems.
          </p>
        </div>

        {/* Consulting */}
        <div className="border border-gray-700 rounded-2xl p-6 hover:scale-105 transition duration-300">
          <FontAwesomeIcon icon={faLightbulb} className="text-4xl mb-4 text-yellow-700" />
          <h2 className="py-2 text-xl font-semibold">Tech Consulting</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Helping businesses choose the right tech stack and build scalable systems.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;