"use client";
import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="p-4 rounded-lg shadow-gray-300 shadow-xs">
      <div className="aspect-auto bg-red-300 text-center">
        <Image
          src={"/product.jpg"}
          alt="Product Image"
          objectFit="contain"
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-2 text-sm text-left">
        <div className="font-medium text-lg">
          Product Name
        </div>
        <div className="text-xs text-gray-500">
          Product Desc
        </div>
        <div className="text-sm text-green-500">
          Product Price
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
