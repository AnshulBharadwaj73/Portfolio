import React, { useEffect, useState, useRef } from "react";
import "../css/pixel.css";
import Github from "../asset/github.png";
import Linkedin from "../asset/linkedin.png";
import Google from "../asset/Google Chrome 3D Icon.ico";
import IE from "../asset/Internet Explorer.ico";
import MyComputer from "../asset/My Computer.ico";
import Gate from "../asset/Gate.ico";
import Book from "../asset/open_book.ico";
import Skill from "../asset/Personal Digital Assistant.ico";
import Email from "../asset/email.ico";

export default function Footer({ onAppClick }) {
  const [currentTime, setCurrentTime] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  //   console.log(programs + "gghvgh");

  const programs = [
    {
      id: "about",
      name: "About.exe",
      icon: MyComputer,
    },
    {
      id: "projects",
      name: "Projects.exe",
      icon: Gate,
    },
    {
      id: "education",
      name: "Education.exe",
      icon: Book,
    },
    {
      id: "skill",
      name: "Skill.exe",
      icon: Skill,
    },
    {
      id: "connect",
      name: "Connect.exe",
      icon: Email,
    },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
      setTodayDate(now.toLocaleDateString());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 100000);
    return () => clearInterval(intervalId);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const SearchQuery = (e) => {
    const q = e.target.value;
    setSearchResult(q);

    if (q.trim() === "") {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }
    console.log(programs);
    const filteredResults = programs.filter(
      (program) =>
        program.name.toLowerCase().includes(q.toLowerCase()) ||
        program.id.toLowerCase().includes(q.toLowerCase())
    );
    console.log(filteredResults);
    setSearchResults(filteredResults);
    setIsSearchOpen(filteredResults.length > 0);
  };

  useEffect(() => {
    console.log("Footer - onAppClick received:", onAppClick);
    console.log("Footer - onAppClick type:", typeof onAppClick);
  }, [onAppClick]);

  const handleInputClick = () => {
    if (searchResults.length > 0) {
      setIsSearchOpen(true);
    }
  };
  // Add this to see if search is working
  useEffect(() => {
    console.log("Search results:", searchResults);
    console.log("Is search open:", isSearchOpen);
  }, [searchResults, isSearchOpen]);

  const handleAppClick = (programId) => {
    console.log("Footer: Attempting to open", programId);

    if (typeof onAppClick === "function") {
      onAppClick(programId);
    } else {
      console.error("onAppClick is not a function:", onAppClick);
      // Fallback: you could set up a default behavior here
    }

    setSearchResult("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  // Debug: Check if onAppClick is received

  return (
    <footer className="fixed z-50 bottom-0 left-0 w-[100%]">
      <div className="bg-[#c0c0c0] border-t-2 border-t-white border-l-2 border-l-white border-b-2 border-b-gray-500 border-r-2 border-r-gray-500">
        <div className="w-full flex justify-between items-center px-4 py-1">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <button className="text-black px-3 py-1 bg-[#c0c0c0] border-t-2 border-t-white border-l-2 border-l-white border-b-2 border-b-gray-500 border-r-2 border-r-gray-500 hover:bg-gray-300">
              📺 Start
            </button>

            <div className="mobile-lg:hidden relative" ref={searchRef}>
              <input
                type="text"
                placeholder="Search programs..."
                value={searchResult}
                onChange={SearchQuery}
                onClick={handleInputClick}
                className="text-black h-8 px-2 bg-white border-t-2 border-t-gray-500 
                  border-l-2 border-l-gray-500 
                  border-b-2 border-b-white 
                  border-r-2 border-r-white
                  min-w-[200px] focus:outline-none
                  placeholder-gray-600"
              />

              {/* Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute left-0 bottom-12 bg-white border-t-2 border-t-gray-500 border-l-2 border-l-gray-500 border-b-2 border-b-white border-r-2 border-r-white shadow-lg max-h-60 overflow-y-auto min-w-[200px]">
                  <div className="px-3 py-2 bg-blue-700 text-white text-sm font-bold border-b border-gray-400">
                    Programs ({searchResults.length})
                  </div>
                  {searchResults.map((program) => (
                    <div
                      key={program.id}
                      onClick={() => handleAppClick(program.id)}
                      className="flex items-center px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-300 last:border-b-0"
                    >
                      <img
                        src={program.icon}
                        alt={program.name}
                        className="w-4 h-4 mr-2"
                      />
                      <span className="text-sm">{program.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mobile-lg:hidden">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-7 w-7 hover:scale-110 transition-transform"
                  src={Google}
                  alt="Google icon"
                />
              </a>
            </div>
            <div className="mobile-lg:hidden">
              <a href="#" className="hover:scale-110 transition-transform">
                <img className="h-7 w-7" src={IE} alt="Internet Explorer" />
              </a>
            </div>
          </div>

          {/* Right Section - Time and Icons */}
          <div className="flex items-center space-x-4 text-black">
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/AnshulBharadwaj73"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img className="w-7 h-7" src={Github} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshul-bharadwaj-80486119b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img className="w-7 h-7" src={Linkedin} alt="LinkedIn" />
              </a>
            </div>

            {/* Date and Time */}
            <div className="flex items-center space-x-3 text-sm font-bold flex-none min-w-[140px]">
              <span className="flex-1 text-right">{todayDate}</span>
              <span className="flex-1 text-left pl-2">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
