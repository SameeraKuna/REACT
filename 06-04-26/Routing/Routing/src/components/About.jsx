import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate(); 
    function handleClick(){
        navigate("/dashboard");
    }
  return (
   <>
    <h1>About</h1>
    <button onClick={handleClick}>Dashboard</button>
   </>
  )
}

export default About