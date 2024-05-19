"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div className="">
      <header
        className={`inset-x-0 top-0 z-50 fixed transition-all ${
          scrolling ? "bg-white bg-opacity-5" : "bg-transparent opacity-100"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 ${
            scrolling ? "shadow-md" : ""
          }`}
          aria-label="Global"
        >
          <div className="flex ">
            <Link href="#" className="m-1 p-2">
              <h2 className="text-lg text-black">{"<Atul />"}</h2>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {/* Custom SVG menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-2 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        {mobileMenuOpen && (
          <div
            className={`absolute left-0 w-full  ${
              scrolling ? "bg-white bg-opacity-5" : "bg-transparent opacity-100"
            }`}
          >
            <div className="max-w-3xl mx-auto p-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
