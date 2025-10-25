import React from "react";
import hand from "../asset/handshake.gif";
import Github from "../asset/github.png";
import Linkedin from "../asset/linkedin.png";
import Email from "../asset/email.ico";

export default function Connect() {
  return (
    <>
      <div className="max-w-[1000px] p-3 overflow-y-auto max-h-[800px] w-[900px] text-black flex flex-col relative px-5 pt-3 sm:gap-4">
        <div className="flex flex-col justify-center items-center sm:flex-row font-bold gap-2 relative">
          <img
            src={hand}
            className="h-32 w-32  sm:h-60 sm:w-44 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-white shadow-md"
          ></img>

          <div className="flex flex-col p-4 text-xs sm:text-lg border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-white shadow-md">
            {/* Yo! You’ve reached the Anshul Hotline. ☎️ <br></br>
            Got a project idea, some pixel art love, or just wanna nerd out
            about code? <br></br>
            Drop a line - I’m all ears.<br></br> */}
            Hello from the Anshul Command Center 🚀 Whether it’s a new app
            concept, some retro design inspiration, or just code banter over
            coffee — drop me a line. Let’s build something awesome together.
            Whether it’s frontend magic or backend logic, I’m right at home
            crafting seamless, full-stack experiences.
            <div className="flex flex-row gap-2 mt-2 items-end">
              <a href="mailto:bharadwaj.anshul09575@gmail.com" target="_blank">
                <img
                  src={Email}
                  className="hover:scale-110 w-8 h-8 cursor-pointer"
                ></img>
              </a>
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
          </div>
        </div>
      </div>
    </>
  );
}
