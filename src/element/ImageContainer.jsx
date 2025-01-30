import React from 'react';

function ImageContainer(props) {
  console.log(props.img);
  -2;
  return (
    <div className="w-full  text-center  justify-center p-5">
      <div className="w-full flex justify-center">
        <img className="w-full rounded-md" src={props.img}></img>
      </div>
      <div className="w-full text-center  justify-center">
        <h1 className="text-2xl text-gray-500 py-3">Magna feugiat lorem</h1>
        <p className="text-gray-500 py-4">
          Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc
          lobortis non amet vis sed volutpat et nascetur.
        </p>
        <button className="bg-white border-2 border-text-gray-500 py-2 px-8 rounded-md text-gray-700 ">
          <span>MORE</span>
        </button>
      </div>
    </div>
  );
}

export default ImageContainer;
