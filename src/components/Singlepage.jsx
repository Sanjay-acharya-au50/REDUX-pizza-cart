import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {data} from './data'

import {useSelector} from 'react-redux'


const Singlepage = () => {

    const cartProduct = useSelector(state => state.cart)
    console.log("redux",cartProduct)

    // console.log(cart)
    const [state, setState] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        setState(data[id])
    },[id])
    console.log(id)
    console.log(state)



  return (
    <div className='border border-black'>

        <Link to={'/cart'}> cart {cartProduct.length}</Link>
        <div className=' w-full flex justify-center items-center'>
            <img src={state.image} alt="" className='h-[300px] w-[300px] p-6'/>
        </div>
        <div className='flex flex-col justify-center items-center'>

        <div className='text-center'>{state.name}</div>
        <div className='text-center'>{state.category}</div>
        <div className='text-center'>{state.spicy === true ? "spicey" : "not spicy"}</div>
        <div className='text-center'>{state.vegetarian === true ? "Veg" : "nonVeg"}</div>
        <div className='text-center'>{state.price}</div>
        {/* <button className='border border-black p-3' onClick={()=>handleClick(state)}>add to cart</button> */}
        <button className='border border-black p-3' >add to cart</button>
        </div>

    </div>
  )
}

export default Singlepage