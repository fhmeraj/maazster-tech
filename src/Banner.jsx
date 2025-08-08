import React from 'react'
import cover from "../src/assets/coverO.png";
import imggirl from "../src/assets/girlimg.png";

const Banner = () => {
  return (

    <>
      <div className='w-full  lg:block hidden lg:h-[120vh] h-full'>
      <div className=" bg-[url('../src/assets/coverO.png')] lg:h-[700px]  h-[900px] bg-no-repeat bg-center bg-cover flex lg:flex-row flex-col items-center justify-between">
        <div className='lg:w-[50%] h-full flex items-center justify-center mt-12'><img className='lg:h-[70vh] h-auto animate-bounce duration-1000 ' src={imggirl}/></div>

        <div className='lg:w-[50%] w-full h-full flex flex-col justify-center'>
          <div>
            <p className="text-white text-s">Get the sale right now!</p>
            <h1 className="text-white text-3xl font-bold mt-3">Enjoy up to 10% OFF on any course</h1>
            <p className="text-white text-s mt-4 pr-28">Unlock your potential with our exclusive offer—save 10% when you enroll in one or more courses. Don’t miss out on this limited-time opportunity to boost your skills and career!</p>
            <button className="bg-white rounded mt-8"><h1 className=" text-orange-500 text-lg px-4 py-1">View Courses</h1></button>
          </div>
        </div>
      </div>
      </div>

        <div className='w-full lg:h-[120vh] lg:hidden h-full'>
      <div className=" bg-[#f4aa68] lg:h-[700px]  h-[900px] bg-no-repeat bg-center bg-cover flex lg:flex-row flex-col items-center ">
        <div className='lg:w-[50%] h-full flex items-center justify-center mt-12'><img className='lg:h-[70vh] h-[40vh] animate-bounce duration-1000 ' src={imggirl}/></div>

        <div className='lg:w-[50%] w-full h-full flex flex-col items-center justify-center p-5'>
          <div  className='flex flex-col items-center justify-center'>
            <p className="text-white text-s">Get the sale right now!</p>
            <h1 className="text-white text-xl font-bold mt-3">Enjoy up to 10% OFF on any course</h1>
            <p className="text-white text-s mt-4 lg:pr-28">Unlock your potential with our exclusive offer—save 10% when you enroll in one or more courses. Don’t miss out on this limited-time opportunity to boost your skills and career!</p>
            <button className="bg-white rounded mt-8"><h1 className=" text-orange-500 text-lg px-4 py-1">View Courses</h1></button>
          </div>
        </div>
      </div>
      </div>


      </>
      
       

        

      
    
  )
}

export default Banner
