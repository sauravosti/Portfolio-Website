//import React from 'react'
import {useState} from "react"

const Navbar = () => {


    const [myName, setBrandName]=useState("SAURAV OSTI")
    const[menuBar, setMenuLinks] = useState([
        {
         title:'Home',
         link:'/home',
         id:'Home'
        },

        {
            title:'About',
            link:'/about',
            id:'About'
        },

        {
            title:'Skills',
            link:'/skills',
            id:'Skills'
        },

        // {
        //     title:'Project',
        //     link:'/project',
        //     id:'Project'
        // },

        {
            title:'Contact',
            link:'/contact',
            id:'Contact'
        },
        
    ])
  return (
 <>
 

 <div className=" h-14 px-4 py-3  main flex justify-between bg-black text-green-500">
    <h1 className='text-2xl font-bold'>{myName}</h1>
 
    
 <div className='space-x-5'>
    {menuBar.map((link) => (
        <a key={link.id} href={link.link} className=' hover:text-blue-800 '>
            {link.title}
        </a>
    ))}
 </div>
 </div>
    
    
 </>
     
    
  )
}

export default Navbar
