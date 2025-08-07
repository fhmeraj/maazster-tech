import React from 'react'
import logo from "./assets/logo.png"

const NavBar = () => {
  return (
    <div className='w-full h-[15vh] flex items-center  sticky  top-0 z-50  bg-white  shadow-2xl'>
      <div className='h-[100%] w-[20%]  flex items-center ml-20'><img src={logo}/></div>
      <div className='w-[80%] h-full flex items-center justify-center gap-x-16 pl-12'>
      <h1 className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>HOME</h1>
      <h1 className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>COURSES</h1>
      <h1 className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>PLAN</h1>
      <h1 className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>TESTIMONIALS</h1>
      <button className='bg-orange-300 hover:bg-orange-400 font-semibold rounded-2xl hover:scale-110 transition-all duration-500'><h1 className='px-6 py-1.5'>CONTACT US</h1></button>
      </div>

      
    </div>
  )
}

export default NavBar
