import React from "react";
import Link from "next/link";

// If closeMenu is not exported, you can define it here

const Footer = () => {
  return (
    <div className="md:flex md:items-center justify-between bg-gray-100 p-6 text-gray-700 gap-4">
      <div>Main Logo</div>
      <div>
        <ul className="flex flex-col content-cent md:items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/products">Adhtiya</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link
              className="text-green-500"
              href="/contact"
            >
              Join as Adhtiya
            </Link>
          </li>
        </ul>
      </div>
      <div>Terms</div>
      <div>Address</div>
    </div>
  );
};

export default Footer;
