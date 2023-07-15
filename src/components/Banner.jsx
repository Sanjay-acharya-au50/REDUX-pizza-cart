import React from 'react'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='bg-yellow-400 h-[100vh] w-full py-[100px] '>
    <div className='max-w-[1240px] my-[100px] mx-auto text-center'>
            <div className='text-[40px] md:text-[70px]'>Order your <span className='text-[60px] md:text-[100px] text-[#1e272e]'>|</span> Favourite..!</div>
            {/* <div className='text-[25px] xs:text-[10px] md:text-[50px]'>Delicious Food Available!!</div> */}
                <Link to={'/product'} className='bg-black text-white text-[20px] md:w-[20%] p-3 mt-2 rounded'>Order Now!</Link>
    </div>
        
    </div>
  )
}

export default Banner