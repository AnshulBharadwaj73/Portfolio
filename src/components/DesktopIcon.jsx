import React from "react";
// import MyComputer from "../asset/My Computer.ico";
// import Pikachu from "../asset/pikachu normal cursor.ani";

// export default function ({ icon, label }) {
//   return (
//     <div>
//       <img
//         className="w-20 h-20 m-3 hover:cursor-pointer"
//         src={icon}
//         alt={label}
//       ></img>
//       <span className="text-l font-semibold">{label}</span>
//     </div>
//   );
// }

// src/components/DesktopIcon.jsx
export default function DesktopIcon({ icon, label, onClick }) {
  return (
    <div
      className="flex flex-col items-center relative top-5 w-32 cursor-pointer group"
      onClick={onClick}
    >
      <div className="w-24 h-24 flex items-center justify-center group-hover:bg-white/20 p-1 rounded">
        <img src={icon} alt={label} className="w-20 h-20" />
      </div>
      <div className="h-7 w-36 flex items-center justify-center">
        <span className="text-black m-2 p-1 w-full bg-white/30 font-bold mt-2 text-sm text-center bg-transparent px-1 group-hover:bg-white-600">
          {label}
        </span>
      </div>
    </div>
  );
}
