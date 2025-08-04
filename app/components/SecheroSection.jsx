import React from "react";
import HomeButtons from "./Homebutton";
import {
  TruckFast,
  Wallet,
  ShieldTick,
} from "iconsax-reactjs";

const SecheroSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly">
      <HomeButtons
        icon={TruckFast}
        tagName={"Fast Delivery"}
      />
      <HomeButtons
        icon={Wallet}
        tagName={"Secure Payment"}
      />
      <HomeButtons
        icon={ShieldTick}
        tagName={"Trusted Platform"}
      />
    </div>
  );
};

export default SecheroSection;
