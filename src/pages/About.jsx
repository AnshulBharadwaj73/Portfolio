import React from "react";
import me from "../asset/an_img.jpg";

export default function About() {
  return (
    <>
      <div className="mobile-lg:w-[380px] mobile-lg:h-[550px] mobile-lg:grid mobile-lg:gap-28 sm:h-[450px] sm:w-[700px] flex flex-col sm:flex-row relative p-4 pl-10 sm:pl-4 sm:pt-8  sm:gap-4">
        <div className="mobile-lg:h-[100px] h-[100px] w-[300px] relative">
          <div className="mobile-lg:h-[250px] mobile-lg:w-[300px] overflow-hidden absolute h-84 top-0 border-t-2 border-l-2 border-gray-300 border-b-4 border-r-4 border-b-gray-500 border-r-gray-500 bg-gray-300 shadow-md">
            <img
              src={me}
              className="mobile-lg:h-[250px] mobile-lg:w-[300px] h-full w-full hover:scale-150 transition-all duration-0.05"
            ></img>
          </div>
          <img
            // src={happy}
            className="absolute h-12  top-5 -left-1 -rotate-45"
          ></img>
          {/* <img src={cherry} className="absolute h-14  bottom-5 -left-2 "></img> */}
          {/* <img src={bunny} className="absolute h-24  bottom-5 -right-2 "></img> */}
        </div>
        <div className="mobile-lg:w-[290px] mobile-lg:h-[200px] h-full w-[350px] sm:w-[340px] text-sm sm:text-lg">
          <span className="mobile-lg:w-[290px] w-[290px]">
            I’m a developer with a creational eye and a soft spot for vintage
            and modern UI. After sharpening my skills at companies like TCS, I
            now freelance across the stack, creating performant, accessible and
            expressive digital experiences. Whether it’s a minimalist dashboard
            or a pixel-art portfolio like this one, I bring thoughtful detail,
            clean architecture, and a bit of creative rebellion to every
            project.
          </span>
        </div>
      </div>
    </>
  );
}
