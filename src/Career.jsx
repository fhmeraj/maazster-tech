import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa6'


const Career = () => {
  return (
    <div className='w-full h-[140vh]'>
      <div className='w-fill h-[25vh]  flex items-center justify-center'>
        <h1 className='text-black text-3xl font-extrabold'>Choose Your</h1>
        <h1 className='text-orange-500 text-3xl font-extrabold ml-2.5'>Career</h1>
      </div>
      <div className='w-full h-[115vh] flex items-center justify-center gap-x-5'>
        <div className='w-[30vw] h-[80vh] shadow-2xl bg-white text-center rounded-3xl flex flex-col items-center justify-center gap-y-5'>
          <div class="text-2xl font-extrabold text-blue-500 group-hover:text-white ">SUMMER TRAINING</div>
          <div class="text-4xl font-extrabold text-orange-500 group-hover:text-white ">Rs. 6500/-</div>
          <ul class=" font-[1.08rem] space-y-1 text-[#444] text-lg">
              <li class="border-b border-gray-500 pb-2">5 Hour Daily Classes</li>
              <li class="border-b border-gray-500 pb-2">Recovery Class For Each Session</li>
              <li class="border-b border-gray-500 pb-2">Study Material Of Each Languages</li>
              <li class="border-b border-gray-500 pb-2">Free Access Of Online Portal For 1 Year</li>
              <li class="border-b border-gray-500 pb-2">Free Web Servers</li>
              <li class="border-b border-gray-500 pb-2">Project File According To Project</li>
            </ul>
            <div className='rounded bg-orange-500'><button className='px-10 py-2 flex items-center justify-center gap-1.5'><FaRegPaperPlane />ENROLL NOW</button></div>
        </div>

        <div className='w-[30vw] h-[80vh] shadow-2xl bg-white text-center rounded-3xl flex flex-col items-center justify-center gap-y-5'>
          <div class="text-2xl font-extrabold text-blue-500 group-hover:text-white ">INDUSTRIAL TRAINING</div>
          <div class="text-4xl font-extrabold text-orange-500 group-hover:text-white ">Rs.15000/-</div>
          <ul class=" font-[1.08rem] space-y-1 text-[#444] text-lg">
              <li class="border-b border-gray-500 pb-2">Specialized Courses</li>
              <li class="border-b border-gray-500 pb-2">Increases Practical Knowledge</li>
              <li class="border-b border-gray-500 pb-2">Provides Industrial Exposure</li>
              <li class="border-b border-gray-500 pb-2">Polish Your Interdisciplinary Knowledge</li>
              <li class="border-b border-gray-500 pb-2">Develop Interpersonal Skills</li>
              <li class="border-b border-gray-500 pb-2">Customized Training Solutions</li>
            </ul>
          <div className='rounded bg-orange-500'><button className='px-10 py-2 flex items-center justify-center gap-1.5'><FaRegPaperPlane />ENROLL NOW</button></div>
        </div>
        <div className='w-[30vw] h-[80vh] shadow-2xl bg-white text-center rounded-3xl flex flex-col items-center justify-center gap-y-5'></div>
      </div>
      
    </div>
  )
}

export default Career
