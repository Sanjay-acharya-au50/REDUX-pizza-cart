import React from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { MdFastfood } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {getCartTotal} from '../store/createSlice'
import { useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
const {cart,totalQuantity} = useSelector(state => state.allCart)
// console.log(totalQuantity)
  const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getCartTotal())
    },[cart])


  return (
    <div className="bg-yellow-400 p-4 sticky top-0 ">
      <div className="max-w-[1240px] py-[12px] mx-auto items-center flex justify-start  md:justify-between">
        <div className="flex justify-between items-center w-[100%]">
          <div className="flex">
            {toggle ? (
              <GrClose
                onClick={() => setToggle(!toggle)}
                className="text-black text-2xl md:text-3xl md:hidden block"
              />
            ) : (
              <MdOutlineMenuOpen
                onClick={() => setToggle(!toggle)}
                className="text-black text-3xl md:hidden block"
              />
            )}
            <Link
              to={"/"}
              className="text-2xl md:text-3xl font-bold flex	text-black"
            >
              <div className="text-3xl hidden md:block">
                <MdFastfood />
              </div>
              REDUX Pizza cart
            </Link>
            {/*  md:hidden for large screen it will be hidden, for mobile screen it will b vissible block*/}
          </div>
          <Link to={'/cart'}>
          <div className="md:hidden flex justify-end text-[22px] items-center w-[100px]">
            <p><FaShoppingCart/></p>
            <sup>{totalQuantity}</sup>
          </div></Link>
        </div>

        {/* hidden for small device, md-> mideum device it will show */}
        <ul className=" hidden md:flex text-black gap-10 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"contact"}>
            <li>Contact</li>
          </Link>
          <Link to={"/cart"} >
            <li className="flex text-[22px]">
              <FaShoppingCart/>
            <sup>
              {totalQuantity}
              </sup>
            </li>
          </Link>
        </ul>

        {/* responsive drawer
    -100% innitially not shows after clicking button it will shwow*/}
        <ul
          className={`w-full h-screen md:hidden duration-300 text-white bg-black fixed  top-[92px]
             ${toggle ? "left-[0%]" : "left-[-100%]"}`}
        >
          <Link to={"/"}>
            <li
              className="py-3 text-center shadow-orange-300"
              onClick={() => setToggle(false)}
            >
              Home
            </li>
          </Link>
          <Link to={"/cart"}>
            <li
              className="py-3 text-center shadow-orange-300"
              onClick={() => setToggle(false)}
            >
              cart
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              className="py-3 text-center shadow-orange-300"
              onClick={() => setToggle(false)}
            >
              About
            </li>
          </Link>
          <Link to={"/contact"}>

            <li
              className="py-3 text-center shadow-orange-300"
              onClick={() => setToggle(false)}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
