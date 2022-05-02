import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home()  {
    let navigate = useNavigate();
  return (
      <div>
    <div>Home</div>
    <button 
        onClick = {() => {
            navigate ("/about") ;
        }}>About</button>
        </div>
  )
}

export default Home