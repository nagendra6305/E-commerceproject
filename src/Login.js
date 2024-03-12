import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



 const Login = () => {
    const navigate= useNavigate()
    const[email,setemail]=useState("")
    const[password,setpassword]= useState("")


    const logidetails = ()=> {
      // navigate('/fetch')
      
     
        const loginvalue= localStorage.getItem("signup")
        const oldvalue = JSON.parse(loginvalue)
        
       if(oldvalue.email == email && oldvalue.password == password){
        navigate('/fetch')
        console.log("valid user")
        
       }
else{
  console.log("invalid userID")
}
    }
       
  return (
    <div>
        <input onChange={(e)=>setemail(e.target.value)} placeholder="email"></input><br></br>
        <input onChange={(e)=>setpassword(e.target.value)}placeholder="password"></input><br></br>


         <button onClick={logidetails}>login</button>
    </div>

   
  )
}
export default Login;