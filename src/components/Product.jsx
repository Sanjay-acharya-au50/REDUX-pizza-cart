import React, {  useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/createSlice';
import Regsign from './Regsign';
import Footer from './Footer';

// import axios from 'axios';
const Product = () => {
  const [state,setState] = useState(3);
  const [search, setSearch] = useState("");

  
  
  const dispatch = useDispatch();


  const loadMore = () => {
    setState(state+20)
  }


  const {items} = useSelector(state => state.allCart)


  return (
    <div>

      <Regsign setSearch = {setSearch}/>
      <div className='p-5  bg-[#1e272e]'>

      
      {
        // cart?.slice also works
        items && items.slice(0,state).filter((e)=>{
          return search === "" ? e : e.category.toLowerCase().includes(search.toLowerCase() )
        }).map((e,i)=>(
          <div key={i} className= ' rounded-lg m-3 shadow-lg md:px-[150px] bg-black text-white  p-10 mx-auto md:grid grid-cols-3'>
          <div className='col-span-1 flex items-center justify-center'>
              <img src={e.image} alt='' className='h-[250px] w-[350px] rounded'></img>
          </div>
          <div className='col-span-2 items-center flex flex-col md:items-start justify-center sm:p-2 md:p-5'>
              <p>cat: {e.category}</p>
              <p className='font-bold text-[#0009]'>Domino's Pizza: Delivering Happiness</p>
              <p className='mt-2 '>With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration.</p>
              {/* <Link to={`/single/${e.id}`} className='bg-black text-white p-3 w-full md:w-[20%] rounded mt-2' >Order Now!</Link> */}
              <button className='bg-yellow-400 hover:bg-white hover:text-black duration-500 text-black p-3 w-full md:w-[20%] rounded mt-2' onClick={()=>dispatch(addToCart(e))}>Order Now!</button>
          </div>
  </div>
        ))
      }
      <button onClick={loadMore} className='hover:bg-yellow-400 hover:text-black duration-500 p-2 w-full flex justify-center items-center bg-black text-white'>Load more..</button>
    

      </div>
      <Footer/>
    </div>
  )
}

export default Product
