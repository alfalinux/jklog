import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const TitleText = ({ text, warnaText, warnaLatar, warnaPanah, opacityLatar }) => {
  return (
    <div className="relative flex items-center justify-center h-20">
      {/* Teks dengan latar belakang */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-center ${warnaLatar} text-6xl font-bold ${opacityLatar}`}
      >
        <div className="max-w-full">{text}</div>
      </div>

      {/* Teks utama dengan panah */}
      <div className={`relative flex items-center z-10 text-center ${warnaText} text-4xl font-bold`}>
        <span className={`absolute -left-10 flex items-center space-x-[-10px]`}>
          <ChevronRightIcon className={`h-4 w-4 ${warnaPanah}`} />
          <ChevronRightIcon className={`h-4 w-4 ${warnaPanah}`} />
          <ChevronRightIcon className={`h-4 w-4 ${warnaPanah}`} />
          <ChevronRightIcon className={`h-4 w-4 ${warnaPanah}`} />
          <ChevronRightIcon className={`h-4 w-4 ${warnaPanah}`} />
        </span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default TitleText;
