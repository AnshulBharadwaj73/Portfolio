// import me from "../assets/me/shruti.jpeg";
// import happy from "../assets/smiley/love-eyes.png";
import Paint from "../asset/Paint Waterfall GIF.gif";

export default function Education() {
  return (
    <>
      <div className="mobile-lg:w-80 mobile-lg:h-[330px] sm:h-[565px] sm:w-[800px] text-sm sm:text-lg font-bold w-full h-[600px] flex flex-col sm:flex-row relative ">
        <div className="mobile-lg:w-80 mobile-lg:h-[300px] sm:h-[600spx] sm:w-[800px] h-[600px] w-full relative ">
          <img
            src={Paint}
            className="mobile-lg:w-80 mobile-lg:h-[360px] h-full w-full sm:block absolute -top-9"
          ></img>

          {/* <img
            src={StudyRoom}
            className="sm:h-[415px] sm:w-[640px] h-full w-full absolute sm:top-10 sm:right-10"
          ></img> */}
          <div className="mobile-lg:w-64 mobile-lg:left-10 mobile-lg:top-0 absolute sm:top-14 top-5 m-2 sm:m-0  sm:left-32 sm:bg-white/80 flex  border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 bg-white  p-2">
            <ul>
              <li className="text-lg">Education</li>
              <li className=" hidden sm:block">
                -----------------------------------------------------
              </li>
              <li className="text-lg sm:text-2xl">
                Masters of Cloud Computing{" "}
              </li>
              <li>
                NCI, Ireland. (<span className="italic mr-2">2022 - 2023 </span>
                )
              </li>
              <li className="hidden sm:block">
                -----------------------------------------------------
              </li>
              <li className="text-lg sm:text-2xl">
                Bachelors Of Engineering - ECE{" "}
              </li>
              <li>
                Lakshmi Narain College Of Technology, India. (
                <span className="italic sm:mr-2"> 2016 - 2020</span>)
              </li>
              <li className="hidden sm:block">
                -----------------------------------------------------
              </li>
            </ul>
          </div>
          <a
            href="/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute mobile-lg:bottom-3 mobile-lg:right-5 mobile-lg:w-24 bottom-24 right-9 w-32 hover:bg-blue-400 text-sm sm:text-2xl flex justify-center items-center border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-blue-600 text-white cursor-pointer shadow-md"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
