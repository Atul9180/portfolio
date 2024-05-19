import Image from "next/image";
import React from "react";
import editableData from "@/data/editableData.json";

function Experiences() {
  const { heading, data } = editableData.experiences;

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-medium pb-8  text-center">{heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-auto">
            {data.map((data, index) => (
              <div className="lg:w-1/2 lg:px-4 pb-5 text-center" key={index}>
                <Image
                  className="mx-auto mb-2.5 bg-white"
                  width={300}
                  height={75}
                  src={data.Brandlogo}
                  alt=""
                />
                <p className="text-lg font-bold mb-2">{data.role}</p>
                <p className="text-gray-600">{data.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    // <div className="p-5">
    //   <section className="text-gray-600 body-font">
    //     <div className="container px-5 mx-auto">
    //       <div className="flex flex-col text-center w-full my-2">
    //         <h1 className="text-2xl font-large title-font mb-2 text-gray-900">
    //           Experiences
    //         </h1>
    //       </div>
    //       <div className="flex flex-wrap -m-3 justify-around">
    //         <div className="p-4 lg:w-1/4 md:w-1/2">
    //           <div className="h-full flex flex-col items-center text-center">
    //             <Image
    //               alt="team"
    //               className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
    //               src={"/vendify.png"}
    //               height={50}
    //               width={50}
    //             />
    //             <div className="w-full">
    //               <h2 className="title-font font-medium text-lg text-gray-900">
    //                 Alper Kamu
    //               </h2>
    //               <h3 className="text-gray-500 mb-3">UI Developer</h3>
    //               <p className="mb-4">
    //                 DIY tote bag drinking vinegar cronut adaptogen squid fanny
    //                 pack vaporware.
    //               </p>
    //               <span className="inline-flex">
    //                 <a className="text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a className="ml-2 text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a className="ml-2 text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                 </a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="p-4 lg:w-1/4 md:w-1/2">
    //           <div className="h-full flex flex-col items-center text-center">
    //             <Image
    //               alt="team"
    //               className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
    //               src={"/vendify.png"}
    //               height={50}
    //               width={50}
    //             />
    //             <div className="w-full">
    //               <h2 className="title-font font-medium text-lg text-gray-900">
    //                 Holden Caulfield
    //               </h2>
    //               <h3 className="text-gray-500 mb-3">UI Developer</h3>
    //               <p className="mb-4">
    //                 DIY tote bag drinking vinegar cronut adaptogen squid fanny
    //                 pack vaporware.
    //               </p>
    //               <span className="inline-flex">
    //                 <a className="text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a className="ml-2 text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a className="ml-2 text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                 </a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="p-4 lg:w-1/4 md:w-1/2">
    //           <div className="h-full flex flex-col items-center text-center">
    //             <Image
    //               alt="team"
    //               className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
    //               src={"/vendify.png"}
    //               height={50}
    //               width={50}
    //             />
    //             <div className="w-full">
    //               <h2 className="title-font font-medium text-lg text-gray-900">
    //                 Atticus Finch
    //               </h2>
    //               <h3 className="text-gray-500 mb-3">UI Developer</h3>
    //               <p className="mb-4">
    //                 DIY tote bag drinking vinegar cronut adaptogen squid fanny
    //                 pack vaporware.
    //               </p>
    //               <span className="inline-flex">
    //                 <a className="text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a className="ml-2 text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //                   </svg>
    //                 </a>
    //                 <a className="ml-2 text-gray-500">
    //                   <svg
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     className="w-5 h-5"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                 </a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Experiences;
