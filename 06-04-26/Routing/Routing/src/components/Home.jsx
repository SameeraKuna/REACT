import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate(); 
    function handleClick(){
        navigate("/about");
    }
  return (
    <>
    <h1>Welcome to Homepage</h1>
    <button onClick={handleClick}>About</button>
    </>
  )
}

export default Home