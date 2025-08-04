"use client";

import React, {
  useEffect,
  useState,
} from "react";

const Herosection = () => {
  const banners = [
    {
      title: "Welcome to Our Site!",
      subtitle:
        "Discover amazing products and services tailored for you.",
      bgColor: "bg-blue-600",
    },
    {
      title: "Explore Our Latest Collection",
      subtitle:
        "Find your perfect style with our new arrivals.",
      bgColor: "bg-green-600",
    },
    {
      title: "Join Our Community",
      subtitle:
        "Sign up and stay updated with exclusive offers.",
      bgColor: "bg-purple-600",
    },
  ];
  const [currentBanner, setCurrentBanner] =
    useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 1000); // Change banner every 5 seconds
    return () => clearInterval(timer);
  }, []);
  const { title, subtitle, bgColor } =
    banners[currentBanner];
  return (
    <section
      className={`${bgColor} text-white h-64 flex items-center justify-center transition-colors duration-700 my-4 rounded-lg shadow-lg`}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
        <button className="mt-6 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Herosection;
