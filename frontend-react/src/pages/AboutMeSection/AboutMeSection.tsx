import React from "react";

const AboutMeSection = () => {
  return (
    <div className="bg-gray-200 py-4">
      <div className="md:hidden w-full">
          <img className="w-full" src="./images/github-logo.svg" alt="" />
        </div>
      <div className="flex justify-center">
        <div className="md:w-2/5 md:block hidden">
          <img className="w-full" src="./images/github-logo.svg" alt="" />
        </div>
        <div className="md:w-3/5 content-center w-full">
          <h1 className="mt-16 mx-16 mb-12 md:mt-48 md:mx-48 md:mb-24 text-2xl md:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque viverra malesuada ultrices sed aliquet ac fringilla
            tincidunt. Pellentesque et sit ullamcorper leo mattis dignissim.{" "}
          </h1>
          <a href="#">
            <div className="m-4 rounded-3xl bg-gray-800 p-4 md:mx-16 lg:mx-24 xl:mx-60 mb-24 hidden md:block">
              <h2 className="text-white text-center text-2xl">
                Download <span className="text-red-500">Resume</span>
              </h2>
            </div>
          </a>
        </div>
      </div>
      <a href="#" className="md:hidden w-full justify-center flex">
          <div className="rounded-3xl bg-gray-800 w-2/3 p-4 sm:px-30 sm:py-4 sm:mb-12 block md:hidden">
            <h2 className="text-white text-center sm:text-xl md:text-2xl">
              Download <span className="text-red-500">Resume</span>
            </h2>
          </div>
        </a>
    </div>
  );
};

export default AboutMeSection;
