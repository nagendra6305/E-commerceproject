import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




 const Localstorage = () => {
  const navigate = useNavigate()

    const[data,setdata]=useState("storevalue")
    const[first,setfirst]=useState("")
    const[last,setlast]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    // console.log(setdata,"aaa")
    console.log({data})
const Localstorage2=()=>{
    
    const object={
        firstname:first,
        lastname:last,
        email:email,
        password:password
    }
    localStorage.setItem("signup",JSON.stringify(object))
    navigate("/login")

    const setItem=JSON.parse(localStorage.getItem("signup"))
    setdata(setItem) 
    
    
}
    
    

  return (
    <div>


        <input onChange={(e)=>setfirst(e.target.value)} placeholder='firstname'></input><br></br>
        <input onChange={(e)=>setlast(e.target.value)} placeholder='lastname'></input><br></br>
        <input onChange={(e)=>setemail(e.target.value)} placeholder='email'></input><br></br>
        <input onChange={(e)=>setpassword(e.target.value)} placeholder='password'></input><br></br>
        
        <button onClick={Localstorage2 } >button</button>
        
        <div> data: </div>
    </div>
  )
}
export default Localstorage;