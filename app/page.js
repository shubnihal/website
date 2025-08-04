"use client";
import {
  ShieldTick,
  TruckFast,
  Wallet,
} from "iconsax-reactjs";
import Herosection from "./components/Herosection";

import SecheroSection from "./components/SecheroSection";
import HomeProductSection from "./components/HomeProductSection";
import HomeAdhtiyaSection from "./components/Homeadhtiya";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Herosection />
      <SecheroSection />
      <HomeProductSection />
      <HomeAdhtiyaSection />
      <Footer />
    </main>
  );
}
