import {useState} from 'react'
import React from 'react'
import myCV from "../assets/SauravOstiCV.pdf"

const About = () => {

  const [aboutMe, setAboutMe] = useState({
    myresume:myCV,
    about1:"Frontend Developer",
    about2:`Hi, I'm Saurav Osti, As a passionate and results-driven Frontend Web Developer based in Kathmandu,
        specializing in React.js. I mainly focus on building intuitive and dynamic frontend web applications.
        My expertise includes crafting responsive and user-friendly user interfaces.
        With a strong knowledge in Web development methodologies and Object Oriented Programming,
        I create solutions that are not only functional but also intuitive and user-friendly.`
    
  })


  return (
   <>

<div id="About" className="main-container  bg-black text-white " >
<div className='w-full flex justify-center items-center flex-col'>
    <h1 href="/about" className="  px-4 py-4 pb-2 mt-15 mb-8 text-white text-4xl text-center
        items-center font-semibold border-b-4 border-sky-500 ">
          About
      </h1>
</div>
<div className=" border-x-8 border-x-green-600 px-10">
 <div className="flex items-between gap-10 ">
  
  
   <div className=" w-full px-6 py-6 mb-5 space-x-15 space-y-15 flex justify-center items-center text-white gap-10 shadow-md shadow-white hover:scale-110 duration-200">
    <div className="space-y-3 w-2/2 ">
     <h2 className="font-mono font-bold mb-6 text-4xl w-2/2 text-green-500 ">
      {aboutMe.about1}
     </h2>
      <p className="flex justify-center font-semibold">
        { aboutMe.about2}
      </p>
     <div>
      <h1 className=" font-mono font-bold text-4xl mt-6 mb-4 text-green-500"> My CV </h1>
       <p className="mx-2 my-2 font-semibold">Download my CV!</p>
       <button  className="px-2 py-2 my-3 font-semibold text-2xl rounded-md bg-blue-400 hover:bg-blue-600
        duration-200">
        <a href={aboutMe.myresume} download="myresume">Download CV</a>
        </button>
     </div>
    </div>
   </div>


   <div className=" w-full h-100 px-6 py-6 mb-5 space-x-15 space-y-15 flex justify-center items-center text-white gap-10 shadow-md shadow-white hover:scale-110 duration-200">
   <div className="space-y-3 w-2/2">
    <h2 className="font-mono font-bold text-4xl w-2/2 text-green-500">
      Education
    </h2>
   
    <div className=" px-2 py-2 shadow-sm hover:shadow-green-500">
     <h3 className="px-2 py-2 font-bold ">Bachelor Education</h3> 
     <p>
     Currently, pursuing Bachelor's degree in <b className="text-green-400">BSc IT(Hons)</b> at ISMT College, Kathmandu,
     focusing on Web Development, Security and Business to prepare for a career in tech.
     </p>
    </div>
    
    <div className=" px-2 py-2 shadow-sm hover:shadow-green-500">
     <h3 className="px-2 py-2 font-bold ">High School Education</h3> 
     <p>
     Completed Higher Education at Shree Panchayat Sec. School, Morang, in Science faculty with a strong
      foundation in Mathematics and Biology, excelling in problem-solving and critical thinking.
     </p>
    </div>

    <div className=" px-2 py-2 shadow-sm hover:shadow-green-500">
     <h3 className="px-2 py-2 font-bold ">Schooling</h3> 
     <p>
     Completed Secondary Education at Pathibhara English Sec. School, Damak, Jhapa,
      with a focus on core academics and extracurriculars.
     </p>
    </div>
    </div>
  </div>
  </div>

   </div>
   </div>
   
 

   </>
     
  )
}

export default About
