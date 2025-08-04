import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const HomeAdhtiyaSection = () => {
  return (
    <div>
      <div className="text-center mt-10 mb-10">
        <p className="text-gray-600 text-xs">
          Customers Choice
        </p>
        <p className="text-black text-xl font-semibold">
          Check Our Adhtiya
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="mt-5">
          <Link
            href={"/"}
            className="text-green-500"
          >
            More{">>>>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAdhtiyaSection;
