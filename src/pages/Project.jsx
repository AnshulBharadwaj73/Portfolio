import React, { useState } from "react";
import Astro from "../asset/videos/astro.mp4";
import { Tooltip } from "react-tooltip";

export default function Project() {
  const [isOpenWindow, setIsWindowOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("");

  const openProjectWindow = (project) => {
    setActiveProject(project);
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
    setActiveProject("");
  };

  const projectDiscriptions = {
    LinkedIn:
      "This project involves developing a backend service that mimics key functionalities of LinkedIn, such as user profiles, connections, messaging, and job postings. The service is built using Java and SpringBoot, with MongoDb, SQL as the database to store user data and interactions. Key features include RESTful API endpoints for user management, connection requests, messaging, and job listings. The project also incorporates authentication and authorization mechanisms to ensure secure access to user data.",
    Uber: "This project focuses on creating a backend service for a ride-sharing application similar to Uber. Built with Java and SpringBoot, the service manages ride requests, driver assignments, fare calculations, and user profiles. MongoDb and PostgreSQL and PostGIS are used for data storage, ensuring efficient handling of user, storing Geospatial Data and ride information. Key features include RESTful API endpoints for booking rides, tracking drivers, processing payments, and managing user accounts. The project also implements real-time updates and notifications to enhance the user experience.",
    Zomato:
      "This project entails developing a backend service for a food delivery platform akin to Zomato. Utilizing Java and SpringBoot, the service handles restaurant listings, menu management, order processing, and user reviews. MongoDb and PostgreSQL are employed for data storage, facilitating efficient management of restaurant, menu, and order information. Key features include RESTful API endpoints for browsing restaurants, placing orders, processing payments, and submitting reviews. The project also incorporates authentication and authorization mechanisms to ensure secure user access.",
    Courier:
      "This project involves building a full-stack backend service for a courier delivery application. The backend is developed using Java and SpringBoot, while the frontend is created with Thymleaf to provide a seamless user interface. MySQL are used for data storage, managing user profiles, delivery requests, and tracking information. Key features include RESTful API endpoints for booking deliveries, tracking packages, processing payments, and managing user accounts. The frontend integrates with the backend APIs to offer real-time updates and notifications, enhancing the overall user experience.",
  };

  return (
    <div className="sm:w-80 sm:h-[550px] relative w-[750px] h-[450px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        playsInline
        className="sm:w-80 sm:h-[550px] absolute top-0 left-0 w-[750px] h-[450px] object-cover"
      >
        <source className="sm:w-68 sm:h-96" src={Astro} type="video/mp4" />
      </video>
      <div className="sm:w-72 sm:left-3 sm:h-14 sm:flex sm:flex-row sm:text-xs absolute sm:top-5 top-3 m-2 h-[370px] sm:m-0  border-t-2 border-l-2 border-gray-500 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 bg-[#e6ece8] p-2">
        <div className="sm:basis-[20vw] mb-2">
          <span className="sm:hidden">|--</span>
          <button
            data-tooltip-id="my-Linkedin-tooltip"
            data-tooltip-content="LinkedIn Backend Service Project"
            className="sm: cursor-pointer ml-1"
            onClick={() => openProjectWindow("LinkedIn")}
          >
            LinkedIn Ser...
          </button>
        </div>
        <div className="sm:basis-[14vw] mb-2">
          <span className="sm:hidden">|--</span>
          <button
            data-tooltip-id="my-Uber-tooltip"
            data-tooltip-content="Ride Sharing Backend Service Project"
            className="cursor-pointer ml-1"
            onClick={() => openProjectWindow("Uber")}
          >
            Uber
          </button>
        </div>
        <div className="sm:basis-[14vw] mb-2">
          <span className="sm:hidden">|--</span>
          <button
            data-tooltip-id="my-Zomato-tooltip"
            data-tooltip-content="Food Delivery Backend Service Project"
            className="cursor-pointer ml-1"
            onClick={() => openProjectWindow("Zomato")}
          >
            Zomato
          </button>
        </div>
        <div className="sm:basis-[20vw] mb-2">
          <span className="sm:hidden">|--</span>
          <button
            data-tooltip-id="my-Courier-tooltip"
            data-tooltip-content="Fullstack Courier Backend Service Project"
            className="cursor-pointer ml-1"
            onClick={() => openProjectWindow("Courier")}
          >
            Courier Ser..
          </button>
        </div>

        {/* Tooltip Components with Custom Styling */}
        <Tooltip
          id="my-Linkedin-tooltip"
          place="top"
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            borderRadius: "6px",
            fontSize: "12px",
            padding: "4px 8px",
            zIndex: 9999,
          }}
        />
        <Tooltip
          id="my-Courier-tooltip"
          place="top"
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            borderRadius: "6px",
            fontSize: "12px",
            padding: "4px 8px",
            zIndex: 9999,
          }}
        />
        <Tooltip
          id="my-Uber-tooltip"
          place="bottom"
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            borderRadius: "6px",
            fontSize: "12px",
            padding: "4px 8px",
            zIndex: 9999,
          }}
        />
        <Tooltip
          id="my-Zomato-tooltip"
          place="bottom"
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            borderRadius: "6px",
            fontSize: "12px",
            padding: "4px 8px",
            zIndex: 9999,
          }}
        />
      </div>
      {/* <div className="relative">
        <div className="absolute top-8 left-[225px] h-96 w-[490px] z-40 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg">
          
          <div className="absolute -left-5 top-4 w-4 h-7 rotate-45">
            <div className="w-full h-full bg-white/30 backdrop-blur-md rounded-none rounded-tl-[50px] rounded-bl-[50px] border-l border-b border-white/20 "></div>
          </div>
          <div className="absolute -left-5 top-12 w-4 h-7 -rotate-45">
            <div className="w-full h-full bg-white/30 backdrop-blur-md rounded-none rounded-tl-[50px] rounded-bl-[50px] border-l border-b border-white/20 "></div>
          </div>

          <span className="text-white font-semibold drop-shadow-lg">
            Your content here
          </span>
        </div>
      </div> */}
      {isOpenWindow && (
        <div className=" relative">
          <div className="sm:w-72 sm:h-[450px] sm:left-5 sm:top-20 absolute top-8 pl-2 font-serif left-[225px] h-96 w-[490px] z-40 overflow-y-auto bg-white/20 backdrop-blur-md border border-white/20 rounded-lg">
            {/* Single < shape */}
            <div className="absolute -left-4 top-5 transform -translate-y-1/2 ">
              <div className="w-6 h-6 border-l-2 border-t-2 border-white transform -rotate-45 "></div>
            </div>
            <button
              onClick={closeWindow}
              className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600"
            >
              ✕
            </button>

            <span className="sm:left text-white font-semibold drop-shadow-lg">
              {projectDiscriptions[activeProject]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
