// import React from "react";
import myVideo from "../asset/videos/matrix.mp4";

import React, { useState } from "react";

import Window from "../components/Window";

export default function Skills() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState("");

  const skillsMap = {
    frontend: ["React", "Next.js", "Tailwind", "Framer Motion"],
    backend: ["Java", "SpringBoot", "Node.js", "Firebase"],
    tools: ["Git", "VSCode", "Jenkins", "Postman"],
    database: ["PostgreSQL", "MongoDB", "ElasticSearch", "Neo4J"],
    unknown: ["🤖 Just clicked something random!"],
  };

  const openSkillWindow = (skillType) => {
    setActiveSkill(skillType);
    setIsWindowOpen(true);
  };

  return (
    <div className="sm:w-[320px] sm:h-[560px] relative w-[700px] h-[400px]  overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-[700px] h-[400px] object-cover"
      >
        <source src={myVideo} type="video/mp4" />
      </video>

      {/* Floating Action Button */}
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4 sm:py-4 relative">
        <button
          onClick={() => openSkillWindow("frontend")}
          className="sm:relative sm:w-24 sm:h-12 absolute top-72 right-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-2xl hover:scale-110 transform transition-all duration-300 z-40 border-2 border-white/30"
        >
          <span className="text-2xl sm:text-xs">Frontend</span>
        </button>

        <button
          onClick={() => openSkillWindow("backend")}
          className="sm:relative sm:w-24 sm:h-12 absolute top-24 right-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-2xl hover:scale-110 transform transition-all duration-300 z-40 border-2 border-white/30"
        >
          <span className="text-2xl sm:text-xs">Backend</span>
        </button>

        <button
          onClick={() => openSkillWindow("tools")}
          className="sm:relative sm:w-24 sm:h-12 absolute top-24 left-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-2xl hover:scale-110 transform transition-all duration-300 z-40 border-2 border-white/30"
        >
          <span className="text-2xl sm:text-xs">Tools</span>
        </button>

        <button
          onClick={() => openSkillWindow("database")}
          className="sm:relative sm:w-24 sm:h-12 absolute top-72 left-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-2xl hover:scale-110 transform transition-all duration-300 z-40 border-2 border-white/30"
        >
          <span className="text-2xl sm:text-xs">Database</span>
        </button>
      </div>

      {/* Window */}
      {isWindowOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{
            transform: `translate(${-350.72}px, ${39.5391}px)`,
          }}
        >
          <Window
            title={`${
              activeSkill.charAt(0).toUpperCase() + activeSkill.slice(1)
            } Skills`}
            onClose={() => setIsWindowOpen(false)}
            // Adjust these values as needed
          >
            <div className="p-6 max-w-4xl">
              <h1 className="text-3xl font-bold mb-6">
                {activeSkill.charAt(0).toUpperCase() + activeSkill.slice(1)}{" "}
                Skills
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {skillsMap[activeSkill]?.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-lg font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </Window>
        </div>
      )}
    </div>
  );
}
