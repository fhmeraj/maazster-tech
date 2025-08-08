import React from 'react'
import { FaGears } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";
import { BsFillCupHotFill } from "react-icons/bs";




const Course = () => {

const coursedata = [
  {
    id: 1,
    title: "AI & Machine Learning",
    icon:<FaGears />,
    description: "Master neural networks, deep learning, and real-world AI applications. Hands-on projects and the latest tools included.",
  },
  {
    id: 2,
    title: "MERN Full Stack with AI",
    icon:<IoCodeSlash />,
    description: "Learn MongoDB, Express, React, Node, and integrate AI features for smarter web applications.",
  },
  {
    id: 3,
    title: "Data Analyst with AI",
    icon:<VscGraph />,
    description: "Leverage AI for data cleaning, visualization, and predictive analytics. Real datasets and industry tools.",
  },
  {
    id: 4,
    title: "Digital Marketing with AI",
    icon:<HiSpeakerphone />,
    description: "Use AI for content, SEO, and campaign analytics. Learn automation and smart targeting for better ROI.",
  },
  {
    id: 5,
    title: "UI/UX Designre with AI",
    icon:<FaPencil />,
    description: "Combine design thinking with AI-driven prototyping, user testing, and personalization for next-gen experiences.",
  },
  {
    id: 6,
    title: "Java Full Stack with AI",
    icon:<BsFillCupHotFill />,
    description: "Build robust Java applications with integrated AI features. Learn Spring, Hibernate, REST, and AI-powered tools for modern development.",
  },
]

  return (
    <div id='course' className='w-fill lg:h-[165vh] h-[330vh] bg-[#fef1eb]'>
      <div className='w-full h-[30vh]  text-center pt-16 space-y-4'>
        <h1 className='text-[30px] text-[#59504D]'>OUR COURSES</h1>
        <h3 className='text-lg text-[#59504D]'>Explore our range of professional offerings designed to boost your skills and career</h3>
      </div>
      <div className='w-full h-[90vh] flex flex-wrap items-center justify-center lg:mt-0 mt-15'>  

      {coursedata.map((a)=>(
        <div className='w-[280px] h-[350px]  flex flex-col items-center justify-center rounded-3xl shadow-2xl  hover:scale-110 duration-500 group  hover:bg-orange-500 group-hover:text-white m-3 '>
          <div className='flex flex-col items-center justify-center space-y-8 text-center'> 
            <i className=" text-6xl text-orange-500 group-hover:text-white">{a.icon}</i>
            <h1 className='text-xl font-extrabold text-blue-500 group-hover:text-white '>{a.title}</h1>
            <p className='text-[15px] text-gray-500 group-hover:text-white mx-4'>{a.description}</p>
          </div>
          
         

        </div>
      ))}
      </div>
      
    </div>
  )
}

export default Course
