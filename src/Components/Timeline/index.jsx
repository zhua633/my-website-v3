import React from "react";
import Jobs from "../../consts.ts";

function Timeline() {
  return (
    <div className="justify-center flex px-20 pb-20">
      <ol className="relative border-l border-gray-200">
        {Jobs.map((job, index) => (
          <li key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none  text-gray-200">
              {job.date}
            </time>
            <h3 className="text-lg font-semibold text-white underline underline-offset-3 decoration-4 decoration-indigo-600">
              {" "}
              {job.company}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-200">
              {job.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Timeline;
