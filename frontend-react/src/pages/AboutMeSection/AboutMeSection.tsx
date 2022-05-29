import React from "react";

const AboutMeSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-gray-200">
        <img className="w-full" src="./images/github-logo.svg" alt="" />
      </div>
      <div className="w-3/5 bg-gray-200 content-center">
        <h1 className="mt-48 mx-48 mb-24 text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          viverra malesuada ultrices sed aliquet ac fringilla tincidunt.
          Pellentesque et sit ullamcorper leo mattis dignissim.{" "}
        </h1>
        <a href="#">
          <div className="m-4 rounded-3xl bg-gray-800 p-4 mx-60 mb-24">
            <h2 className="text-white text-center text-2xl">Download <span className="text-red-500">Resume</span></h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutMeSection;
