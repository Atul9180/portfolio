import Image from "next/image";
import React from "react";
import editableData from "@/data/editableData.json";

function About() {
  const { heading, imageLink, message, imageSize } = editableData.about;

  return (
    <section className="bg-gray-200 body-font  py-4">
      <h1 className="sm:text-4xl text-3xl pb-3 font-medium text-gray-900 text-center py-10">
        {heading}
      </h1>
      <div className="px-10 container mx-auto flex  justify-between  py-10  md:flex-row flex-col items-center">
        <div className="hidden lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 lg:block">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            width={imageSize}
            height={imageSize}
            src={imageLink}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 leading-relaxed">{message}</p>
          <div className="flex justify-center">
            <button class="relative inline-flex mt-3 items-center outline hover:outline-none p-0.5 mb-2 me-2 bg-transparent text-md font-medium text-black hover:text-white hover:bg-black rounded-lg group  ">
              <span class="relative px-5 py-2.5 ">Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
