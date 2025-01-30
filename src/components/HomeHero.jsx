import React from 'react';
import { FaCloud } from 'react-icons/fa';

const HomeHero = () => {
  return (
    <div
      className="w-full  justify-center  bg-cover bg-fixed "
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="bg-white/30 backdrop-blur-none  ">
        <div className="max-w-md mx-auto py-8">
          <div className=" w-full flex justify-center  ">
            <FaCloud className=" text-8xl text-white" />
          </div>
          <h1 className="font-inherit text-white lg:text-5xl md:text-3xl text-2xl  py-5 text-center">
            Hi, I'm Photon, another fine little freebie from HTML5 UP.
          </h1>
          <p className=" py-2 text-white text-center">
            Accumsan feugiat mi commodo erat lorem ipsum, sed magna lobortis
            feugiat sapien sed etiam volutpat accumsan.
          </p>
          <div className="text-center my-8">
            <button
              type="button"
              className="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
