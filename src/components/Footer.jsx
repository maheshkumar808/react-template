import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
function Footer() {
  return (
    <div className="w-full flex items-center justify-item-center bg-[url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="w-full  justify-center items-center ">
        <div className="w-full flex flex-wrap justify-center items-center gap-4 my-8">
          <div>
            <FaTwitter className="size-10 text-white " />
          </div>
          <div>
            <FaFacebookF className="size-10 text-white " />
          </div>
          <div>
            <FaInstagram className="size-10 text-white " />
          </div>
          <div>
            <FaGithub className="size-10 text-white " />
          </div>
          <div>
            <DiAndroid className="size-10 text-white " />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
          <p className="flex text-white text-sm">
            <FaRegCopyright />
            Untitled
          </p>
          <p className=" text-white text-sm">| Design: HTML5 UP</p>
          <p className=" text-white text-sm">| Demo Images: Unsplash</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
