import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import leftS from "../src/assets/bannerLeft.png";
import rightS from "../src/assets/girl-image.png";
import ring from "../src/assets/bg-ring.png";
import { Element } from 'react-scroll';
const Homepage = () => {
  return (
     <Element id='home' className="w-full lg:h-[85vh]  h-full flex lg:flex-row flex-col  lg:gap-0 gap-12  overflow-hidden ">
        <div className="lg:w-[50%]  w-full h-full text-center text-2xl lg:mt-14  overflow-hidden relative ">

          <p className="text-gray-400 mt-10 mb-5">Welcome to our EduLab </p>
          
          <h1 className="text-6xl font-extrabold mb-5">Best Place To Learn</h1>

          <div><TypeAnimation

            className=' text-orange-500 font-bold '
                sequence={[
                  'Java Full Stack with AI', // Types 'One'
                  1000, // Waits 1s
                  'MERN Full Stack with AI', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Data Analyst with A', // Types 'Three' without deleting 'Two'
                  1000,
                   'AI & Machine Learning', // Types 'One'
                  1000,
                  'UI/UX with AI',
                  1000,
                  'Digital Marketing with AI',
                  1000,
                
                
                  
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{  display: 'inline-block' }}
    /></div>
            
          
          <button className=" text-2xl text-orange-100 rounded-md w-[150px] h-[40px] bg-orange-400 border-black mt-5">
            Join Now
          </button>
          <img  className=' absolute  -z-10 -bottom-20' src={leftS}></img>

        </div>
        <div className=" relative lg:w-[50%]  w-full h-full flex items-center justify-center ">
        <img className='' src={ring}></img>
        <img className='absolute w-[vw] h-[80vh]' src={rightS} /> 

        </div>
      </Element>

  )
}

export default Homepage
