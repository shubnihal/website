"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  HamburgerMenu,
  ArrowLeft2,
} from "iconsax-reactjs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => {
    setIsOpen(false);
  };
  const isActive = (href) => {
    // You can adjust this if you want partial matching instead of exact
    return pathname === href;
  };

  // A helper to build the className for links
  const linkClass = (href) =>
    isActive(href)
      ? "text-green-500"
      : "text-gray-800 hover:text-green-500";

  return (
    <div>
      <nav className="flex py-4 justify-between items-center">
        <div>Main Logo</div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className={linkClass("/")}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className={linkClass("/about")}
                href="/About"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={linkClass("/products")}
                href="/Products"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={linkClass("/adhtiyas")}
                href="/Adhtiya"
                onClick={closeMenu}
              >
                Adhtiyas
              </Link>
            </li>
            <li>
              <Link
                className={linkClass("/services")}
                href="/Services"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={linkClass("/contact")}
                href="/Contactus"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="p-2 bg-green-500 rounded text-white shadow-gray-300 shadow-sm cursor-pointer hidden md:block">
            Join As Adhtiya
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden tex t-white px-4 py-2 rounded"
        >
          {!isOpen ? (
            <HamburgerMenu
              size="32"
              color="#000000"
            />
          ) : (
            <ArrowLeft2
              size="32"
              color="#000000"
            />
          )}
        </button>

        {/* Mobile menu  */}
      </nav>
      {isOpen && (
        <div className="md:hidden h-screen w-full mx-auto flex justify-center items-center">
          <ul className="flex flex-col content-cent items-center gap-4 p-4">
            <li>
              <Link href="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={closeMenu}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={closeMenu}
              >
                ADHTIYA
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={closeMenu}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                className="text-green-500"
                href="/contact"
                onClick={closeMenu}
              >
                JOIN AS VENDOR
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
