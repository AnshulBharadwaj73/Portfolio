import React, { useEffect, useState } from "react";
import XP from "../asset/videos/windows-xp-loading-moewalls-com.mp4";

export default function Loading({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3000); // show for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center text-rose-300 text-sm sm:text-lg font-mono">
      <div className="flex flex-col items-center gap-4">
        {/* <img src={rabbitGif} alt="Booting..." className="w-full h-32 sm:h-44" /> */}
        <video autoPlay loop muted className="w-[500px] h-[250px] sm:h-44">
          <source src={XP} type="video/mp4" className="w-full h-32 sm:h-44" />
        </video>
        <p className="text-2xl">Hop on to my portfolio...</p>
      </div>
    </div>
  );
}
