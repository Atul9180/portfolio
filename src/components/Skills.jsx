// import React from "react";
// import editableData from "@/data/editableData.json";

// function Skills() {
//   const { heading, hardSkills, softSkills } = editableData.skills;
//   console.log({ hardSkills });

//   return (
//     <section className="bg-gray-300 body-font  py-4">
//       <h1 className="sm:text-5xl text-4xl pb-3 font-medium text-gray-900 text-center py-10">
//         {heading}
//       </h1>
//       <div className="p-8 mx-auto bg-lime-600 w-[60vw]">
//         <div className="flex">
//           <button
//             id="hardBtns"
//             className="active w-[50%] mt-1 border border-t-0 border-x-0 rounded-md py-2 text-lg font-medium"
//           >
//             Hardskill
//           </button>
//           <button
//             id="softBtn"
//             className="w-[50%] mt-1 border rounded-md py-2 text-lg font-medium"
//           >
//             SoftSkills
//           </button>
//         </div>

//         <div className="grid  grid-cols-1 lg:grid-cols-2 gap-4 p-3">
//           <div>
//             <h3 className="py-1 pb-1">React Js</h3>
//             <div className="w-[95%] bg-gray-200 rounded-full h-4 dark:bg-gray-400">
//               <div className="bg-blue-600 h-4 rounded-full w-[45%]"></div>
//             </div>
//           </div>

//           {/* 2 */}
//           <div>
//             <h3 className="py-2 pb-1">React Js</h3>
//             <div className="w-[95%] bg-gray-200 rounded-full h-4 dark:bg-gray-400">
//               <div className="bg-blue-600 h-4 rounded-full w-[45%]"></div>
//             </div>
//           </div>

//           {/* 2 */}
//           <div>
//             <h3 className="py-2 pb-1">React Js</h3>
//             <div className="w-[95%] bg-gray-200 rounded-full h-4 dark:bg-gray-400">
//               <div className="bg-blue-600 h-4 rounded-full w-[45%]"></div>
//             </div>
//           </div>

//           {/* 2 */}
//           <div>
//             <h3 className="py-2 pb-1">React Js</h3>
//             <div className="w-[95%] bg-gray-200 rounded-full h-4 dark:bg-gray-400">
//               <div className="bg-blue-600 h-4 rounded-full w-[45%]"></div>
//             </div>
//           </div>

//           {/* 2 */}
//           <div>
//             <h3 className="py-2 pb-1">React Js</h3>
//             <div className="w-[95%] bg-gray-200 rounded-full h-4 dark:bg-gray-400">
//               <div className="bg-blue-600 h-4 rounded-full w-[45%]"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
"use client";
import React, { useState } from "react";
import editableData from "@/data/editableData.json";

function Skills() {
  const { heading, hardSkills, softSkills } = editableData.skills;
  const [activeTab, setActiveTab] = useState("hard");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-gray-300 body-font py-4">
      <h1 className="sm:text-5xl text-4xl pb-3 font-medium text-gray-900 text-center py-10">
        {heading}
      </h1>
      <div className="p-8 mx-auto w-[90vw] md:w-[70vw] lg:w-[60vw]">
        <div className="flex">
          <button
            className={`w-[50%] mt-1 border rounded-md py-2 text-lg font-medium hover:border ${
              activeTab === "hard" ? "active border-b-0" : "border-t-0"
            }`}
            onClick={() => handleTabChange("hard")}
          >
            Hard Skills
          </button>
          <button
            className={`w-[50%] mt-1 border rounded-md py-2 text-lg font-medium hover:border ${
              activeTab === "soft" ? "active border-b-0" : "border-t-0"
            }`}
            onClick={() => handleTabChange("soft")}
          >
            Soft Skills
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-3">
          {activeTab === "hard" &&
            hardSkills.map((skill) => (
              <div key={skill.id}>
                <h3 className="py-2 pb-1">{skill.name}</h3>
                <div className="w-[95%] bg-gray-200 rounded-full h-4 dark:bg-gray-400">
                  <div className="bg-blue-600 h-4 rounded-full w-[45%]"></div>
                </div>
              </div>
            ))}

          {activeTab === "soft" &&
            softSkills.map((skill) => (
              <div key={skill.id}>
                <h3 className="py-2 pb-1">{skill.name}</h3>
                <div className="w-[95%] bg-gray-200 rounded-full h-4 dark:bg-gray-400">
                  <div className="bg-blue-600 h-4 rounded-full w-[45%]"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
