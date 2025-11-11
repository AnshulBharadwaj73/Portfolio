import React, { useState } from "react";
import bag from "../asset/windows-95-landscape-in-real-life-mfbulo12camg5zxy.jpg";
import DesktopIcon from "../components/DesktopIcon";
import MyComputer from "../asset/My Computer.ico";
import Gate from "../asset/exp.ico";
import Book from "../asset/open_book.ico";
import Skill from "../asset/Personal Digital Assistant.ico";
import Email from "../asset/email.ico";
import Windows from "../asset/Windows 95 Classic.ico";
import Window from "../components/Window";
import Education from "./Education";
import Footer from "../components/Footer";
import About from "./About";
import Skills from "./Skills";
import Connect from "./Connect";
import WorkExperience from "../asset/Briefcase.ico";
import Experience from "./Experience";
import Project from "./Project";
import Loading from "../components/Loading";

export default function MainPage() {
  const [booted, setBooted] = useState(false);
  const [openWindows, setOpenWindows] = useState({
    about: false,
    projects: false,
    education: false,
    skill: false,
    connect: false,
    experience: false,
  });

  const openWindow = (windowName) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: true,
    }));
  };

  const closeWindow = (windowName) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: false,
    }));
  };

  // const handleAppClick = (appId) => {
  //   console.log("Opening app:", appId);
  //   openWindow(appId);
  // };

  return (
    <>
      {!booted && <Loading onFinish={() => setBooted(true)} />}
      {booted && (
        <div className="sm:h-[780px] sm:w-[700px] flex h-screen w-screen overflow-hidden relative min-h-screen">
          <img
            className="sm:w-full sm:h-full h-full w-full object-cover fixed top-0"
            src={bag}
            alt="Windows 95 background"
          />

          <div className="flex items-center justify-center min-h-screen w-full z-10">
            <img
              src={Windows}
              className="sm:left-52 sm:w-24 sm:h-24 sm:top-[500px] w-44 h-44 fixed left-[45rem] top-[345px] -translate-x-1/2 -translate-y-1/2"
              alt="Windows 95"
            />
            <div className="z-10 h-20 place-content-center grid grid-cols-[235px] mb-6">
              <div className="flex items-center justify-center space-x-1">
                <span className=" sm:left-36 sm:top-[525px] sm:w-24 sm:h-24 w-60 fixed  h-10 font-ligt text-white font-thin font-sans left-[615px] top-[420px] text-xl ">
                  Microsoft
                </span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <span className="sm:left-36 sm:top-[540px] sm:w-24 sm:h-24 w-60 h-10 font-extrabold font-sans fixed left-[615px] top-[439px] text-3xl ">
                  Windows
                  <span className="text-white italic font-light">95</span>
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className=" absolute top-4 left-4 laptop:grid laptop:grid-cols-2  sm:grid-cols-2 sm:grid sm:gap-2  gap-6 z-10">
            <DesktopIcon
              onClick={() => openWindow("education")}
              icon={MyComputer}
              label="Education.exe"
            />
            <DesktopIcon
              onClick={() => openWindow("projects")}
              icon={Gate}
              label="Projects.exe"
            />

            <DesktopIcon
              onClick={() => openWindow("about")}
              icon={Book}
              label="About.exe"
            />
            <DesktopIcon
              onClick={() => openWindow("skill")}
              icon={Skill}
              label="Skill.exe"
            />
            <DesktopIcon
              onClick={() => openWindow("connect")}
              icon={Email}
              label="Connect.exe"
            />
            <DesktopIcon
              onClick={() => openWindow("experience")}
              icon={WorkExperience}
              label="Experience.exe"
            />

            {/* Windows */}
            {openWindows.education && (
              <Window
                title="Education.exe"
                onClose={() => closeWindow("education")}
              >
                <Education />
              </Window>
            )}

            {openWindows.projects && (
              <Window
                title="Projects.exe"
                onClose={() => closeWindow("projects")}
              >
                <Project />
              </Window>
            )}

            {openWindows.about && (
              <Window title="About.exe" onClose={() => closeWindow("about")}>
                <About />
              </Window>
            )}

            {openWindows.skill && (
              <Window title="Skill.exe" onClose={() => closeWindow("skill")}>
                <Skills />
              </Window>
            )}

            {openWindows.connect && (
              <Window
                title="Connect.exe"
                onClose={() => closeWindow("connect")}
              >
                <Connect />
              </Window>
            )}
            {openWindows.experience && (
              <Window
                title="Experience.exe"
                onClose={() => closeWindow("experience")}
              >
                <Experience />
              </Window>
            )}

            {/* Footer with props */}
            <Footer
              onAppClick={openWindow}
              // programs={programs}
            />
          </div>
        </div>
      )}
    </>
  );
}
