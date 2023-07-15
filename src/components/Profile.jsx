import React from 'react'
import profile from '../imgages/profile.png'
import Typed from 'react-typed'


const Profile = () => {
  return (
    <div className='flex items-center justify-center mt-3'>
        <div class="flex items-center justify-center w-full bg-[#e9e9e9]">
  <img src={profile} className='h-[100px] w-[100px] rounded-[50%]' alt='' />
  <div>
  <Typed 
            className='text-[20px] md:text-[30px] pl-5 font-bold'
            strings={["Designed by SANJAY"]}
            typeSpeed={100}
            backSpeed={10}
            loop={true}

            />

  </div>
</div>
    </div>
  )
}

export default Profile