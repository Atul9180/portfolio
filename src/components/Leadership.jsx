"use client";

import React from "react";
import editableData from "@/data/editableData.json";
import Image from "next/image";

function Leadership() {
  const { heading, message, images } = editableData.leadership;

  return (
    <div className=" p-7 sm:p-2 lg:p-9 bg-gray-200 ">
      <div className="flex flex-col text-center w-full mb-4 ">
        <h2 className="text-4xl font-normal mb-6 text-center">{heading}</h2>
      </div>
      <div class="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p class="mb-8 leading-relaxed">{message}</p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* slider here: */}

          <Image
            className="d-block w-100"
            src={`${images[0].name}`}
            alt="First slide"
            height={500}
            width={490}
          />
        </div>
      </div>
    </div>
  );
}

export default Leadership;
