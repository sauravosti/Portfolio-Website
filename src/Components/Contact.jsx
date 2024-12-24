
import React, { useState } from 'react'

 const Contact = () => {

 const [fullname, setFullName] = useState("")
 const [mail, setMail] = useState("")
 const [textbox, setTextBox] = useState("")
 const [error, setError] = useState("")
 const [success, setSuccess] = useState("") 

const mailValidation =()=>{
    return String(mail)
    .toLocaleLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
}
 
 const handleSend=(e)=>{
 e.preventDefault()
 if(fullname ===""){
   setError("Enter your Full Name!")
 }

   else if(mail ===""){
    setError("Enter your Email!")
    
   }
   else if(!mailValidation(mail)){
    setError("Enter a valid Email!")
   }

   else if(textbox ===""){
    setError("Enter a Message or Feedback!")
   }
 
 else{
   setSuccess("Successfully Sent!")
   setError("")
   setFullName("")
   setMail("")
   setTextBox("")
   console.log(fullname,mail,textbox)
  }

  setTimeout(() => {
    setSuccess(" ");
  }, 3000);

 }
 
  return (
    
 <>
  <div id="/contact"
  className=" contact_ssection bg-black text-white ">
     <div className='w-full flex justify-center items-center flex-col'>
      <h1 className="  px-2 py-2 pb-2 mb-10 mt-2 text-white text-4xl text-center
        items-center font-semibold border-b-4 border-sky-500 ">Get In Touch</h1>
     </div>
     <div className=" border-x-8 border-x-green-600 px-10">
     <div className="mx-2 mb-2 mt-2 my-2 ">
        <p className="flex justify-center items-center text-wrap">Let’s work together, I’m ready to be part of your team!</p>
        <p className="flex justify-center items-center text-wrap">Have any Message or Feedback? Let me know!</p>
        </div>

     <form name="msg_form" className="w-full px-2 py-2  ">

       {success && (  
            <p className="p-2 bg-transparent shadow-white text-center text-green-500 tracking-wide animate-bounce">
                {success}
            </p>
        )}
        
        {error && (
            <p className="p-2 bg-transparent shadow-white text-center text-red-500 tracking-wide animate-bounce">
                {error}
            </p>
        )}

      <div className="flex justify-center space-y-4 mt-5 mb-5 mx-5 my-5">
      <div className="form_section w-1/3 mb-5 grid justify-center items-center hover:scale-110 duration-200 shadow-md shadow-white" > 

        <input className={`${
            error ==="Enter your Full Name!" && "outline-red-500"
        } bg-transparent border-b-2 px-3 py-3 mb-4 border-green-500`}
         type="text" placeholder="Enter Your Name" required 
         onChange={(e)=>setFullName(e.target.value)} value={fullname}
         />
         
        <input className={`${
            error ==="Enter your Email!" && "outline-red-500"
        } bg-transparent border-b-2 px-3 py-3 mb-4 border-green-500`}
         type="email" placeholder="Enter Your Email" required
         onChange={(e)=>setMail(e.target.value)} value={mail} />
        
        <textarea className={`${
            error ==="Enter a Message/Feedback!" && "outline-red-500"
        } bg-transparent border-b-2 px-3 py-3 mb-4 border-green-500`}
         type="text" placeholder="Your Feedback/Message" required
         onChange={(e)=>setTextBox(e.target.value)} value={textbox} >
         </textarea>
       
        <div className="flex  justify-center">
          <button name="send_btn" className="btn btn-md w-1/3 px-2 py-2 rounded-full items-center mb-10 bg-blue-600 hover:bg-blue-500" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
      </div>
     </form>
     </div>
     </div>
    
 </>
    
  )
}

export default Contact
