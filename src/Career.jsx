import React from 'react'
import { FaPaperPlane } from "react-icons/fa";




const Career = () => {
  return (
    <div id='plan' className='w-full lg:h-[140vh] h-full lg:mb-0 mb-7'>
      <div className='w-full h-[25vh]  flex items-center justify-center'>
        <h1 className='text-black text-3xl font-extrabold'>Choose Your</h1>
        <h1 className='text-orange-500 text-3xl font-extrabold ml-2.5'>Career</h1>
      </div>
      <div className='w-full lg:h-[115vh] flex lg:flex-row flex-col items-center justify-center lg:gap-x-5 lg:gap-y-0 gap-y-5 '>
        <div className='lg:w-[30vw] w-[90%] lg:mx-0 mx-auto h-[80vh] shadow-2xl hover:scale-110 duration-500 group hover:bg-orange-500 bg-white text-center rounded-3xl flex flex-col items-center justify-center gap-y-5'>
          <div class="text-2xl font-extrabold text-blue-500 group-hover:text-white ">SUMMER TRAINING</div>
          <div class="text-4xl font-extrabold text-orange-500 group-hover:text-white ">Rs. 6500/-</div>
          <ul class=" font-[1.08rem] space-y-1 text-[#444] group-hover:text-white text-lg">
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">5 Hour Daily Classes</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Recovery Class For Each Session</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Study Material Of Each Languages</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Free Access Of Online Portal For 1 Year</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Free Web Servers</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Project File According To Project</li>
            </ul>
            <div className='rounded bg-orange-500 group-hover:bg-white hover:scale-110 duration-500'><button className='px-10 py-2 flex items-center justify-center gap-1.5 group-hover:text-orange-500'><FaPaperPlane /><span>ENROLL NOW</span></button></div>
        </div>

        <div className='lg:w-[30vw] w-[90%] lg:mx-0 mx-auto h-[80vh] shadow-2xl hover:scale-110 duration-500 group hover:bg-orange-500  bg-white text-center rounded-3xl flex flex-col items-center justify-center gap-y-5'>
          <div class="text-2xl font-extrabold text-blue-500 group-hover:text-white ">INDUSTRIAL TRAINING</div>
          <div class="text-4xl font-extrabold text-orange-500 group-hover:text-white ">Rs.15000/-</div>
          <ul class=" font-[1.08rem] space-y-1 text-[#444] group-hover:text-white text-lg">
              <li class="border-b border-gray-500 group-hover:border-white pb-2">Specialized Courses</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Increases Practical Knowledge</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Provides Industrial Exposure</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Polish Your Interdisciplinary Knowledge</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Develop Interpersonal Skills</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Customized Training Solutions</li>
            </ul>
          <div className='rounded bg-orange-500 group-hover:bg-white hover:scale-110 duration-500'><button className='px-10 py-2 flex items-center justify-center gap-1.5 group-hover:text-orange-500'><FaPaperPlane /><span>ENROLL NOW</span></button></div>
        </div>
        <div className='lg:w-[30vw] w-[90%] lg:mx-0 mx-auto h-[80vh] shadow-2xl hover:scale-110 duration-500 group hover:bg-orange-500 bg-white text-center text-center rounded-3xl flex flex-col items-center justify-center gap-y-5'>
          <div class="text-2xl font-extrabold text-blue-500 group-hover:text-white ">JOB-ORIENTED TRAINING</div>
          <div class="text-4xl font-extrabold text-orange-500 group-hover:text-white ">Rs. 30000/-</div>
          <ul class="font-[1.08rem] space-y-1 text-[#444] group-hover:text-white  text-lg">
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Job Placement Assistance</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Interview Preparation</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Industry Experts As Instructors</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Practical Experience</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Industry-Relevant Curriculum</li>
              <li class="border-b border-gray-500 group-hover:border-white pb-2 ">Professional Certifications</li>
            </ul>
            <div className='rounded bg-orange-500 group-hover:bg-white hover:scale-110 duration-500'><button className='px-10 py-2 flex items-center justify-center gap-1.5 group-hover:text-orange-500'><FaPaperPlane /><span>ENROLL NOW</span></button></div>
        </div>
      </div>
      
    </div>
  )
}

export default Career
