import React from "react";

const Regsign = ({ setSearch }) => {
  return (
    <div className="bg-yellow-400  p-2  md:h-[300px] md:grid grid-cols-2">
      {/* // its cols not col wated my 20mins*/}
      <div className=" col-span-1 flex   justify-center ">
        <div className=" m-1 flex flex-col  justify-center md:py-[20px]">
          <h1 className=" font-bold text-[25px]  md:text-5xl text-center text-black">
            Unlock Exclusive Offer!
          </h1>
          <span className="font-bold text-[15px] md:text-[20px]">
            Sign up to our newsletter and stay up to data.
          </span>
        </div>
      </div>

      <div className=" col-span-1 text-center md:items-center flex justify-center flex-col">
        <div>
          <div className="w-full flex justify-center items-center">
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setSearch(e.target.value)}
              className=" p-2 w-[500px] text-black"
              placeholder="search here"
            />
          </div>

          {/* <h1>hello</h1> */}

          <p className="hidden md:block md:text-[14px] text-start">
          eg: pasta, drinks, dessert, sauces, sides
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regsign;
