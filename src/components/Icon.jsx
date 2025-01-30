import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaCameraRetro } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { FaAppleWhole } from 'react-icons/fa6';

function Icon() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/30310953/pexels-photo-30310953/free-photo-of-frosty-pine-branches-in-winter-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
      className="w-full flex   justify-center min-h-screen bg-cover bg-fixed "
    >
      <div className=" lg:min-w-md md:flex">
        <div className="bg-white/30 backdrop-blur-none w-full  md:flex py-6">
          <div className=" w-full grid grid-cols-2 md:gap-10 gap-10 justify-items-center items-center p-10 overflow-hidden">
            <div className="border-2 md:size-32 size-16 border-sky-500 rotate-45">
              <IoSettingsOutline className="md:size-28 size-16 text-sky-600 px-5 py-5 -rotate-45 " />
            </div>
            <div className="border-2 md:size-32 size-16 border-sky-500 rotate-45">
              <FaCameraRetro className="md:size-28 size-16 text-black px-5 py-5 -rotate-45 " />
            </div>

            <div className="border-2 md:size-32 size-16 border-sky-500 rotate-45">
              <MdComputer className=" md:size-28 size-16 text-blue-400 px-5 py-5 -rotate-45 " />
            </div>
            <div className="border-2 md:size-32 size-16 border-sky-500 rotate-45">
              <FaSquareInstagram className=" md:size-28 size-16 text-pink-600 px-5 py-5 -rotate-45" />
            </div>
            <div className="border-2 md:size-32 size-16 border-sky-500 rotate-45">
              <IoLogoWhatsapp className=" md:size-28 size-16 text-green-400 px-5 py-5 -rotate-45" />
            </div>
            <div className="border-2 md:size-32 size-16 border-sky-500 rotate-45">
              <FaAppleWhole className=" md:size-28 size-16 text- px-5 py-5 -rotate-45 " />
            </div>
          </div>
          <div className=" w-full justify-items-center items-center p-10">
            <h1 className=" text-3xl lg:text-4xl text-gray-500 pt-6">
              Lorem ipsum dolor adipiscing amet dolor consequat
            </h1>
            <p className=" text-gray-500 py-8  leading-loose">
              Adipiscing a commodo ante nunc accumsan interdum mi ante
              adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
              nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
            </p>
            <p className=" text-gray-500 py-8  leading-loose">
              Adipiscing id accumsan adipiscing ipsum Blandit faucibus proin. Ac
              aliquam integer adipiscing enim non praesent vis commodo nunc
              phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis
              phasellus non lobortis dit varius mi varius accumsan lobortis.
            </p>
            <p className=" text-gray-500 py-8  leading-loose">
              Blandit ante aliquam lacinia lorem lobortis semper morbi col
              faucibus vitae integer placerat accumsan orci eu mi odio tempus
              adipiscing adipiscing adipiscing curae consequat feugiat etiam
              dolore. Adipiscing a commodo ante nunc accumsan interdum mi ante
              adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
              nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
              Adipiscing id accumsan adipiscing ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icon;
