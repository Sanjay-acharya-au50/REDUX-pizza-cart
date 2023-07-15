import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {Link} from 'react-router-dom'

const Offers = () => {
  const [productState, setProductState] = useState(1);
  const { items } = useSelector((state) => state.allCart);
  console.log(items);

  const handleLoad = () => {
    setProductState(productState + 1);
  };

  return (
    <>
      {items?.slice(0, productState).map((e, i) => (
        <div
          key={i}
          className=" bg-black text-white p-2 mx-auto md:grid grid-cols-3"
        >
          {/* <div className='col-span-1  border border-black '>helo</div>
      <div className='col-span-2 border border-black '>world</div> */}
          <Link to={'/product'} className="col-span-1 flex items-center justify-center">
            <img
              src={e.image}
              alt=""
              className="h-[250px] w-[320px] rounded"
            ></img>
          </Link>
          <div className="col-span-2 items-center flex flex-col md:items-start justify-center sm:p-2 md:p-5">
            <p className="font-bold text-[#0009]">
              Domino's Pizza: Delivering Happiness
            </p>
            <Link to={'/product'} className="mt-2 ">
              With Domino's it is always “Rishton ka time”. Whether it's a treat
              for your promotion, a kid topping his class or winning the heart
              of your wife who is too tired to cook after a long day at work! A
              cheesy slice of the best pizza is all one needs to put things into
              perspective and start any celebration.
            </Link>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center items-center text-center bg-[#1e272e]  ">
        <p
          className="  w-[100px] text-white hover:text-yellow-400 duration-500 p-2"
          onClick={handleLoad}
        >
          LoadMore....
        </p>
      </div>
    </>
  );
};

export default Offers;
