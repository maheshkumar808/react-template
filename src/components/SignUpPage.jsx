import React from 'react';

function SignUpPage() {
  return (
    <div
      className="w-full  justify-center  bg-cover bg-fixed"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/30310953/pexels-photo-30310953/free-photo-of-frosty-pine-branches-in-winter-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
    >
      <div className=" min-w-md ">
        <div className="bg-white/30 backdrop-blur-none w-full p-7">
          <div className="w-full justify-items-center text-center sm:m-6">
            <h1 className="text-3xl lg:text-4xl text-gray-500">
              Ipsum feugiat consequat
            </h1>
            <p className="text-gray-500 py-8  leading-loose">
              Sed lacus nascetur ac ante amet sapien
            </p>
          </div>
          <div className="w-full  flex  flex-wrap justify-center items-center gap-4 mb-5 ">
            <button className=" min-w-40 min-h-12 bg-transparent text-lg text-center hover:bg-white border-2 border-text-gray-500 rounded-md text-gray-700">
              SIGN UP
            </button>
            <button className="  min-w-40 min-h-12 bg-transparent text-lg text-center hover:bg-white border-2 border-text-gray-500 rounded-md text-gray-700">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
