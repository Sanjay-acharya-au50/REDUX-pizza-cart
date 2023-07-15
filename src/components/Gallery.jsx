import React from 'react'
import pizza1 from '../imgages/pizza1.jpg'
import pizza2 from '../imgages/pizza2.jpg'
import pizza3 from '../imgages/pizza3.jpg'
// import pizza4 from '../imgages/pizza4.jpg'
import pizzaVer from '../imgages/pizzaVer.jpeg'
import pizzaver2 from '../imgages/pizzaver2.jpg'

const Gallery = () => {
  return (
    <div className=' max-w-[1240px] m-auto px-4 grid md:grid-cols-2 grid-rows-6 '>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh] '>
                <img className='object-cover row-span-3 w-full h-full p-1' src={pizzaver2} alt=''  />
                <img className='object-cover row-span-2 w-full h-full p-1' src={pizza1} alt=''  />
                <img className='object-cover row-span-2 w-full h-full p-1' src={pizza2} alt=''  />
                <img className='object-cover row-span-3 w-full h-full p-1' src={pizzaVer} alt=''  />
                <img className='object-cover row-span-2  w-full h-full p-1' src={pizza3} alt=''  />
                {/* <img className='object-cover row-span-2 ' src={pizza4} alt=''  /> */}

            </div>
            <div className='col-1 flex flex-col h-full justify-center'>
              <h3>Lorem, ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            </div>
    </div>
  )
}

export default Gallery