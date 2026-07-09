import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const techStack = [
  { icon: faHtml5, name: "HTML" },
  { icon: faCss3Alt, name: "CSS" },
  { icon: faJs, name: "JavaScript" },
  { icon: faReact, name: "React" },
  { icon: faNodeJs, name: "Node.js" },
  { icon: faFigma, name: "Figma" },
  { icon: faGitAlt, name: "Git" },
];

const Skills = () => {
  return (
    <div className="py-12 px-6 md:px-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>

        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          I work with modern web technologies to build fast, responsive, and
          user-friendly applications.
        </p>

        {/* Infinite Scroll Marquee */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent dark:from-black z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent dark:from-black z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex w-max gap-12 md:gap-16 animate-marquee hover:[animation-play-state:paused]">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-5xl md:text-6xl group shrink-0 transition-all duration-300 hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={tech.icon}
                  className="group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors"
                />
                <span className="text-sm md:text-base mt-3 font-medium text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;