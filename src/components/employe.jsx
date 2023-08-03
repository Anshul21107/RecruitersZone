import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Employe = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center">
      {/* desktop  */}

      <div className="hidden md:flex md:flex-col md:items-center">
        <h1 className=" text-4xl font-bold">Find an Employee</h1>
        <div className="p-16 flex flex-col justify-center items-cente gap-4">
          <div className="flex gap-64 py-4 px-8 hover:bg-blue-300 border-solid border-black hover:cursor-pointer">
            <p className="text-2xl font-semibold">Software Engineers</p>
            <p className="text-xl -ml-2.5">Full time, Part time</p>
            <p>
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
          <hr />

          <div className="flex gap-64 py-4 px-8 hover:bg-blue-300 hover:cursor-pointer">
            <p className="text-2xl font-semibold">Product Managers</p>
            <p className="text-xl -ml-1">Full time, Part time</p>
            <p>
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
          <hr />
          <div className="flex justify-between py-4 px-8 hover:bg-blue-300">
            <p className="text-2xl font-semibold">Data Scientists</p>
            <p className="text-xl ml-8">Full time, Part time</p>
            <p>
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
          <hr />
          <div className="flex gap-64 py-4 px-8 hover:bg-blue-300">
            <p className="text-2xl font-semibold">Front End Developers</p>
            <p className="text-xl -ml-7">Full time, Part time</p>
            <p>
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
          <hr />
        </div>
      </div>

      {/* mobile  */}

      <div className="flex flex-col item-center justify-center md:hidden">
        <h1 className="text-4xl font-bold">Find an Employee</h1>
        <div className="p-6 flex flex-col gap-4 w-full max-w-lg">
          <div className="flex flex-col py-4 bg-white hover:bg-blue-300 hover:cursor-pointer">
            <p className="text-2xl font-semibold">Software Engineers</p>
            <p className="text-xl mt-1">Full time, Part time</p>
            <p className="mt-2">
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
          <hr className="my-2" />

          <div className="flex flex-col py-4 bg-white hover:bg-blue-300 hover:cursor-pointer">
            <p className="text-2xl font-semibold">Product Managers</p>
            <p className="text-xl mt-1">Full time, Part time</p>
            <p className="mt-2">
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
          <hr className="my-2" />

          <div className="flex flex-col py-4 bg-white hover:bg-blue-300 hover:cursor-pointer">
            <p className="text-2xl font-semibold">Data Scientists</p>
            <p className="text-xl mt-1">Full time, Part time</p>
            <p className="mt-2">
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
          <hr className="my-2" />

          <div className="flex flex-col py-4 bg-white hover:bg-blue-300 hover:cursor-pointer">
            <p className="text-2xl font-semibold">Front End Developers</p>
            <p className="text-xl mt-1">Full time, Part time</p>
            <p className="mt-2">
              <AiOutlineArrowRight className="text-2xl cursor-pointer font-bold" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employe;
