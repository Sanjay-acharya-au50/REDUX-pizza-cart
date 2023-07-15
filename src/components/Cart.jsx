import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { remove } from '../store/createSlice';
import {getCartTotal,removeItem,increaseQuantity,decreaseQuantity} from '../store/createSlice'
import { AiOutlineCaretLeft,AiOutlineCaretRight,AiFillDelete } from 'react-icons/ai';
import { BsBoxArrowInRight } from 'react-icons/bs';


const Cart = () => {
    const dispatch = useDispatch()
    const {cart, totalPrice } = useSelector(state => state.allCart);
    // console.log("cartJSX",totalQuantity)
    console.log("cart",cart.length)


    dispatch(getCartTotal())


  return (
    <>


    <div className='bg-[#1e272e]  py-10  md:flex'>
      <div className='md:w-[70%]'>

    {cart.length > 0 ? cart.map((e,i)=>(
      
      <div className='rounded-lg bg-black text-white m-3 p-2 flex justify-center items-center flex-col' key={i}>
          <div className=' bg-yellow-400  text-black'>
            <img src={e.image} className='h-[300px] w-[300px]' alt="" />
            <div className='p-2'>

        <p><b>Name : </b>{e.name}</p>
        <p><b>Category : </b>{e.category}</p>
        <p><b>Price : </b>{e.price} /-</p>
            </div>
      </div>

        <div className='flex justify-center items-center '>
        <p className='mx-5 my-2' onClick={()=>dispatch(decreaseQuantity(e.id))}><AiOutlineCaretLeft/></p>
        <p className='mx-5 my-2'>  {e.quanity} </p>
        <p className='mx-5 my-2' onClick={()=>dispatch(increaseQuantity(e.id))}><AiOutlineCaretRight/></p>
        </div>
        <div className='flex'>
        <button className='bg-red-500 text-black p-3  rounded-l-lg' onClick={()=>dispatch(removeItem(e.id))}><AiFillDelete/></button>
        <div className='flex justify-center items-center  p-3 gap-1 rounded-r-lg bg-yellow-400 text-black'>
        <button className=''>checkout </button>
        <BsBoxArrowInRight/>
          </div>
        </div>
        </div>
    )) : (
      <div className='text-white w-full p-10  text-center ]'>OOpss..! Your cart is Empty! </div>
    )}
    </div>
    <div className='h-[600px] sticky top-[100px] p-5 m-3 flex justify-center items-center flex-col md:w-[30%] bg-black  text-white rounded-lg'>
      <div className=' flex justify-between border-b w-full'>
      <div>
      <p className='m-1'>Offer : 10%</p>
        <p className='m-1'>Discount : 19%</p>
        <p className='m-1'>Tax : 18%</p>
        <p className='m-1'>Shipping Charge : 40/-</p>
      </div>
      <div className='text-xl'>
      <p>10 %</p>
        <p>19 %</p>
        <p>18 %</p>
        <p>40 /-</p>
      </div>
      </div>
      <div className='text-2xl flex justify-between  w-full'>

    <p className=''>total price: </p>
    <p> {totalPrice}/-</p>
      </div>


    </div>

    </div>

    </>

  )
}

export default Cart