// components/HeroSection.js
import React from "react";
import Link from "next/link";
import editableData from "@/data/editableData.json";

export default function HeroSection() {
  const { name, message } = editableData.mainBody;
  return (
    <div className="hero flex flex-col justify-center w-full h-screen bg-gradient-to-br from-red-500 via-purple-500 to-blue-500">
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="sm:text-4xl text-6xl pb-3 lg:pb-5 text-center ">{`${name}`}</h1>
        <p className="text-sm text-center py-3">{`${message}`}</p>

        {/* icons */}
        <div class=" p-5  mx-3 my-4 ">
          <Link
            target="_blank"
            className="mx-3 hover:text-black"
            rel="noopener noreferrer"
            href="https://github.com/Atul9180"
            aria-label="My github"
          >
            <i class="fab fa-github text-3xl socialicons"></i>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 hover:text-black "
            href="https://www.facebook.com/atulPatel-noFB_ID"
            aria-label="My facebook"
          >
            <i class="fab fa-facebook text-3xl socialicons"></i>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 hover:text-black"
            href="https://www.instagram.com/atul9180/"
            aria-label="My instagram"
          >
            <i class="fab fa-instagram text-3xl socialicons"></i>
          </Link>
          <Link
            target="_blank"
            className="mx-3 hover:text-black"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/atulpatel"
            aria-label="My linkedin"
          >
            <i class="fab fa-linkedin text-3xl socialicons"></i>
          </Link>
        </div>

        {/* end of icons */}

        <button class="relative inline-flex mt-3 items-center justify-center p-0.5 mb-2 me-2 bg-transparent overflow-hidden text-sm font-medium text-white hover:text-black hover:bg-white rounded-lg group  ">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 outline hover:outline-none ">
            More about me
          </span>
        </button>
      </div>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}
