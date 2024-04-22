// "use client";

// import { projectsData } from "@/lib/data";
// import React, { useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// import Link from "next/link";

// // {projectsData.map((project, index) => ())}

// const Project = () => {
//   const [showMore, setShowMore] = useState(false);

//   const handleToggleShow = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {projectsData
//           .filter((project, index) => (showMore ? index < 6 : index < 3))
//           .map((project, index) => (
//             <div
//               key={index}
//               className="p-4 bg-white rounded-lg border border-zinc-400"
//             >
//               {/* <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-full h-48 object-cover mb-4 rounded-md"
//           /> */}
//               <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//               <p className="text-gray-600">{project.description}</p>
//               <div className="mt-4">
//                 <ul className="flex flex-wrap">
//                   {project.tags.map((tag, tagIndex) => (
//                     <li
//                       key={tagIndex}
//                       className="bg-gray-100 text-black border border-zinc-400 px-2 py-1 rounded-lg text-sm mr-2 mt-2"
//                     >
//                       {tag}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="mt-4">
//                 {project.goTo.name === "Github" ? (
//                   <a
//                     type="button"
//                     className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-xs px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
//                     href={project.goTo.link}
//                   >
//                     <svg
//                       className="w-4 h-4 me-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     {project.goTo.name}
//                   </a>
//                 ) : (
//                   <a
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     href={project.goTo.link}
//                   >
//                     {project.goTo.name}
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//       </div>
//       <div className="flex flex-col sm:flex-row items-center justify-center mt-4 text-lg font-medium">
//         <button
//           className="group text-sm bg-white px-4 py-2 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition cursor-pointer border-2 border-zinc-600 dark:bg-white/10"
//           onClick={handleToggleShow}
//         >
//           {showMore ? "Show Less" : "Show More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Project;
