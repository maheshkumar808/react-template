import React from 'react';

function AboutUs() {
  return (
    <div className="w-full  bg-white flex  text-center justify-center p-8">
      <div className="w-full  md:flex justify-center py-7 sm:m-8">
        <div className="w-full justify-items-center  text-left sm-m-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  text-gray-500 ">
            Lorem ipsum dolor adipiscing amet dolor consequat
          </h1>
          <p className=" py-8 text-gray-500 leading-loose">
            Adipiscing a commodo ante nunc accumsan et interdum mi ante
            adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus
            nascetur ac non. Lorem curae et ante amet sapien sed tempus
            adipiscing id accumsan.
          </p>
        </div>
        <div className="w-full flex justify-center  sm:m-8">
          <img
            className=" w-full rounded-lg "
            src="https://html5up.net/uploads/demos/photon/images/pic01.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
