import React from 'react';
import ImageContainer from '../element/ImageContainer';

function section() {
  return (
    <div className="w-full justify-center ">
      <div className="w-full justify-center text-center p-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl  text-gray-500 ">
          Adipiscing amet consequat
        </h1>
        <p className="text-gray-500 py-6">
          Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 ">
        <div>
          <ImageContainer
            img={
              'https://images.pexels.com/photos/30391091/pexels-photo-30391091/free-photo-of-cozy-workspace-with-coffee-mug-on-desk.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
          />
        </div>
        <div>
          <ImageContainer
            img={
              'https://images.pexels.com/photos/30367916/pexels-photo-30367916/free-photo-of-cold-and-flu-remedies-with-pills-and-thermometer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          />
        </div>
        <div>
          <ImageContainer
            img={
              'https://images.pexels.com/photos/30368923/pexels-photo-30368923/free-photo-of-woman-in-yellow-cardigan-with-green-smoothie-and-tablet.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default section;
