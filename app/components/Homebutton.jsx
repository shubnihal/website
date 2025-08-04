import { TruckFast } from "iconsax-reactjs";
import React from "react";

const HomeButtons = ({ icon, tagName }) => {
  return (
    <div className="py-2 px-2 flex items-center space-x-4 rounded-full shadow-sm shadow-green-300">
      <div className="bg-green-500 p-2 rounded-full">
        {React.createElement(icon, {
          size: "24",
          color: "#FFFFFF",
        })}
      </div>
      <div>
        <div className="font-semibold text-sm">
          {tagName}
        </div>
        <div className="font-semibold text-gray-600 text-xs">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  );
};

export default HomeButtons;
