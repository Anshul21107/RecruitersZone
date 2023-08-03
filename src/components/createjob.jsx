import React from 'react';
import image from "../Image/mage-1.png";
import image_3 from "../Image/image-2.png";
import image_4 from "../Image/image-4.png";
import image_2 from "../Image/image-3.png";


const createjob = () => {
  return (
    <>
    <hr />
    <div className="m-8 flex items-center justify-center">
      <div className="max-w-screen mx-auto bg-white p-8 rounded-lg md:flex">
        <div className="md:max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Automated sourcing at scale</h2>
          <p className="text-gray-600 w-4/6">
          Let Job Portal's advanced artificial intelligence algorithms "find" you the right people who are open to new opportunities. Our algorithm's accuracy can match the very best human recruiters, but at scale.
          </p>
        </div>
        <div className="md:w-80 mt-4 md:mt-0 md:ml-4">
          <img src={image} alt="Sample" className="rounded-lg" />
        </div>
      </div>
    </div>
    <hr />


    <hr />
    <div className="m-8 flex items-center justify-center">
      <div className="max-w-screen mx-auto bg-white p-8 md:flex">
      <div className="md:w-80 mt-4 md:mt-0 md:mr-4">
          <img src={image_4} alt="Sample" className="rounded-lg"/>
        </div>
        <div className="md:max-w-2xl pl-64">
          <h2 className="text-2xl font-semibold mb-4">Immediate business impact</h2>
          <p className="text-gray-600 ">
          With Instahyre each of your recruiters sees a 2-3x increase in the number of candidate interviews. This not only results in substantial cost savings, but allows critical positions to be closed much faster.
          </p>
        </div>
        
      </div>
    </div>
    <hr />

    <hr />
    <div className="m-8 flex items-center justify-center">
      <div className="max-w-screen mx-auto bg-white p-8 rounded-lg md:flex">
        <div className="md:max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Increased candidate engagement</h2>
          <p className="text-gray-600 w-4/6">
          Reach out to candidates with automatically generated personalized emails. Leverage your extra bandwidth to provide a world class candidate experience to attract and retain the best talent
          </p>
        </div>
        <div className="md:w-80 mt-4 md:mt-0 md:ml-4">
          <img src={image_3} alt="Sample" className="rounded-lg" />
        </div>
      </div>
    </div>
    <hr />

    <hr />
    <div className="m-8 flex items-center justify-center">
      <div className="max-w-screen mx-auto bg-white p-8 md:flex">
      <div className="md:w-80 mt-4 md:mt-0 md:mr-4">
          <img src={image_2} alt="Sample" className="rounded-lg"/>
        </div>
        <div className="md:max-w-2xl pl-64">
          <h2 className="text-2xl font-semibold mb-4">Leverage your brand</h2>
          <p className="text-gray-600 ">
          Employer branding is critical to attract talent in the modern economy. Branding features are built into Instahyre from ground up with a mobile-friendly and multimedia-enabled showcase for your culture.
          </p>
        </div>
        
      </div>
    </div>
    <hr />
  </>
  );
};

export default createjob