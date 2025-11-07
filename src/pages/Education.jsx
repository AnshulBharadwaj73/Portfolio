// import me from "../assets/me/shruti.jpeg";
// import happy from "../assets/smiley/love-eyes.png";
import Paint from "../asset/Paint Waterfall GIF.gif";

export default function Education() {
  return (
    <>
      <div className="sm:w-[320px] sm:h-[555px] text-sm sm:text-lg font-bold w-[700px] h-[600px] flex flex-col relative ">
        <div className="  h-[600px] w-full relative ">
          <img
            src={Paint}
            className="sm:w-80 sm:h-[590px] h-[635px] w-full sm:block absolute -top-9"
          ></img>

          {/* <img
            src={StudyRoom}
            className="sm:h-[415px] sm:w-[640px] h-full w-full absolute sm:top-10 sm:right-10"
          ></img> */}
          <div className="sm:w-64 sm:h-[300px] sm:text-sm sm:left-12 sm:top-5 h-[390px] w-[500px] left-24 absolute  top-5 m-2 sm:m-0 sm:bg-white/80 flex  border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 bg-white  p-2">
            <ul>
              <li className="text-3xl sm:text-xl">Education</li>
              <li className=" sm:hidden">
                --------------------------------------------------------------------------------------------------------------
              </li>
              <li className="text-2xl sm:text-xl">
                Masters of Cloud Computing{" "}
              </li>
              <li className="text-lg sm:text-base">
                NCI, Ireland. (<span className="italic mr-2">2022 - 2023</span>)
              </li>
              <li className=" sm:hidden sm:">
                --------------------------------------------------------------------------------------------------------------
              </li>
              <li className="text-2xl sm:text-xl ">
                Bachelors Of Engineering - ECE{" "}
              </li>
              <li className="text-lg sm:text-base">
                Lakshmi Narain College Of Technology, India. (
                <span className="italic mr-2">2016 - 2020</span>)
              </li>
              <li className=" sm:block">
                ---------------------------------------------------------------------------------------------------------------
              </li>
            </ul>
          </div>
          <a
            href="/resume/Anshul_Bharadwaj_Resume.pdf"
            target="_blank"
            download="Anshul_Bharadwaj_Resume.pdf"
            rel="noopener noreferrer"
            className="absolute sm:bottom-16 sm:text-base sm:right-5 sm:w-24 bottom-[70px] h-8 right-9 w-32 hover:bg-blue-400 text-sm sm:text-2xl flex justify-center items-center border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-blue-600 text-white cursor-pointer shadow-md"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
