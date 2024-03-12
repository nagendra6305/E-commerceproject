
import React from 'react'
import { useNavigate } from 'react-router-dom';


export const Homepage = () => {
    const navigate = useNavigate()
  return (
    <div>Homepage
        <button   onClick={()=>{navigate("/signup")}}> sighUp</button>
    <button onClick={()=>{navigate("/login")}}>login</button>

    </div>
  )
}
export default Homepage;


