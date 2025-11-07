import React, { useState } from "react";
import summer from "../asset/videos/sky.mp4";

export default function Experience() {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [activeYear, setActiveYear] = useState("");

  const openYearWindow = (year) => {
    setActiveYear(year);
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
    setActiveYear("");
  };

  const year2024 = {
    Company: "Freelance Developer",
    Role: "Full Stack Developer",
    Duration: "2024-Present",
    Description:
      "Working as a Freelance Developer, I have been involved in various projects that require end-to-end development solutions. My responsibilities include designing user interfaces, developing backend services, and ensuring seamless integration between front-end and back-end components. I collaborate closely with clients to understand their requirements and deliver tailored solutions that meet their business needs. This role has enhanced my skills in full-stack development and client communication.",
    TechStack: ["Java", "SpringBoot", "React", "MySQL", "AWS"],
  };

  const year202122 = {
    Company: "Tata Consultancy Services",
    Role: "Assistant System Engineer",
    Duration: "2021-2022",
    Description:
      "At TCS, I worked as part of a backend engineering team, building and improving microservices using modern system design principles. I developed REST APIs, implemented core business logic, and collaborated closely with DevOps for deployment and CI/CD processes. I also contributed to system optimization, code reviews, and refining legacy components for better performance. This experience helped me grow not just as a developer, but as someone who understands reliability, scalability, and real-world product impact.",
    TechStack: [
      "Java",
      "SpringBoot",
      "Microservices",
      "Hibernate",
      "Redis",
      "Docker",
      "RDBMS",
      "GitHub",
      "Jenkins",
      "SonarQube",
    ],
  };

  const year202021 = {
    Company: "Star Sun Technologies Pvt Ltd",
    Role: "Backend Developer",
    Duration: "2020-2021",
    Description:
      "At Star Sun Technologies, I contributed to backend development projects, focusing on building robust APIs and integrating third-party services. I collaborated with cross-functional teams to deliver scalable solutions and enhance application performance. This role allowed me to deepen my understanding of backend technologies and improve my problem-solving skills in a fast-paced environment.",
    TechStack: ["Java", "SpringBoot", "REST APIs", "MySQL", "Git", "Postman"],
  };

  // Get the data based on active year
  const getActiveData = () => {
    switch (activeYear) {
      case "2024":
        return year2024;
      case "2021-2022":
        return year202122;
      case "2020-2021":
        return year202021;
      default:
        return null;
    }
  };

  const activeData = getActiveData();

  return (
    <div className="relative w-[750px] h-[450px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-[750px] h-[450px] object-cover"
      >
        <source src={summer} type="video/mp4" />
      </video>

      {/* Buttons */}
      <button
        onClick={() => openYearWindow("2024")}
        className="fixed top-[380px] right-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 shadow-2xl hover:scale-110 transform transition-all duration-300 z-40 border-2 border-white/30"
      >
        <span className="text-2xl">2024-</span>
      </button>

      <button
        onClick={() => openYearWindow("2021-2022")}
        className="fixed top-[380px] right-[280px] bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 shadow-2xl hover:scale-110 transform transition-all duration-300 z-40 border-2 border-white/30"
      >
        <span className="text-2xl">2021-2022</span>
      </button>

      <button
        onClick={() => openYearWindow("2020-2021")}
        className="fixed top-[380px] left-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 shadow-2xl hover:scale-110 transform transition-all duration-300 z-40 border-2 border-white/30"
      >
        <span className="text-2xl">2020-2021</span>
      </button>

      {/* Content Window - Conditionally Rendered */}
      {isWindowOpen && activeData && (
        <div className="absolute sm:top-8 top-3 m-2 sm:m-0 left-16 sm:bg-white/80 flex border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 bg-white p-2 z-50">
          <div className="w-[600px] h-[270px] bg-slate-200 p-4 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeWindow}
              className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white flex items-center justify-center text-sm hover:bg-red-600"
            >
              X
            </button>

            <ul className="space-y-3">
              <h2 className="text-lg font-bold">{activeData.Company}</h2>
              <div className="flex justify-between text-sm">
                <span className="font-semibold">{activeData.Role}</span>
                <span className="text-blue-600">{activeData.Duration}</span>
              </div>
              <li className="text-sm text-gray-700 leading-relaxed">
                {activeData.Description}
              </li>
              <div className="mt-4">
                <h3 className="text-sm font-bold mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {activeData.TechStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
