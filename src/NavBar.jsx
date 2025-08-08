import React from 'react'
import logo from "./assets/logo.png"
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <div className='w-full h-[15vh] flex items-center  sticky  top-0 z-50  bg-white  rounded-b-2xl  shadow-2xl'>
      <div className='h-[100%] lg:w-[20%]  w-[100%]  flex items-center lg:ml-20  ml-5'><img  className='lg:w-full lg:h-16  h-10  ' src={logo}/></div>
      <div className='w-[80%] h-full lg:flex  hidden items-center justify-center gap-x-16 pl-12'>
      <Link to="home" smooth={true} duration={500} className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>HOME</Link>
      <Link to="course" smooth={true} duration={500} className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>COURSES</Link>
      <Link to="plan" smooth={true} duration={500} className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>PLAN</Link>
      <h1 className='hover:text-orange-500 font-semibold hover:underline decoration-2 hover:scale-110 transition-all duration-500'>TESTIMONIALS</h1>
      <button className='bg-orange-300 hover:bg-orange-400 font-semibold rounded-2xl hover:scale-110 transition-all duration-500'><h1 className='px-6 py-1.5'>CONTACT US</h1></button>
      </div>

      
    </div>
  )
}

export default NavBar
