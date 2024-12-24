import { useState } from "react"
import myImage from "../assets/Untitled.png"
import myBackground from "../assets/myBanner.jpg"
const Webbanner = () => {
 
  const[detail,setDetail] = useState({
   detail1: "Welcome, Nice to meet you!",
   detail2: "I'm Saurav Osti,",
   detail3: "Frontend Developer.",
   detail4: "Explore my portfolio and let's collaborate to bring innovative ideas to Technical life!"

  })

  return (
   <>
   <div className=" border-x-8 border-x-green-600 ">
   <div style={{
      backgroundImage: `URL(${myBackground})`,
      backgroundSize: "cover"

    }}
    className=" main-cointaner  flex h-80 items-center">
    <div 
     className="w-full h-full flex justify-center">
    
   
     <div className=" w-full flex flex-wrap justify-center items-center ms-10">
      <div className="w-1/2 py-30 ">
        <h1 className=" detail_1 text-4xl mt-3 font-bold font-serif text-yellow-500" >{detail.detail1}</h1>
        <h3 className=" detail_2 text-3xl mt-3 font-bold text-white">{detail.detail2}</h3>
        <h2 className=" detail_3 text-2xl  text-white font-sans">{detail.detail3} </h2>
        <p className=" detail_4 text-1xl mt-2 font-serif text-white">{detail.detail4}</p>
       <br />
     
     <div className="icon-container flex flex-wrap space-x-6 "> 
        <a className=" px-2 py-2 h-10 w-10 flex hover:bg-blue-600 cursor-pointer  rounded-full justify-center items-center bg-white " href="https://github.com/sauravosti">
            <i className="fa-brands fa-github text-2xl"></i>
        </a>

        <a className=" px-2 py-2 h-10 w-10 flex hover:bg-blue-600 cursor-pointer rounded-full justify-center items-center bg-white " href="https://www.instagram.com/saurav_ostii/">
        <i className="fa-brands fa-instagram text-2xl"></i>
        </a>

        <a className=" px-2 py-2 h-10 w-10 flex hover:bg-blue-600 cursor-pointer rounded-full justify-center items-center bg-white " href="https://www.linkedin.com/in/saurav-osti">
        <i className="fa-brands fa-linkedin text-2xl"></i>
        </a>

        <a className=" px-2 py-2 h-10 w-10 flex hover:bg-blue-600 cursor-pointer rounded-full justify-center items-center bg-white " href="https://wa.me/9810536053">
        <i className="fa-brands fa-whatsapp  text-2xl"></i> 
        </a>
     </div>
     </div> 
        
      
     </div>
     <div className="  px-8 py-7 w-2/3 mt-4 mb-4 flex justify-center items-center">
      <img src={myImage} className="  h-2/2 w-2/3 rounded-full shadow-lg "/>
     </div>


     </div>
     </div>
   </div>
   
   </>
  )
}

export default Webbanner
