import React from 'react'
import Information from "./information"
import Button from "./buttons"
import "./profile.css"
const profile = (props) => {
  const profiles=props.profiles;  
  return (
    <div className='contenedor'>
        <img className='avatar' src={profiles.avatar} alt="" />
        <Information name={profiles.name} info={profiles.info}/>
        <Button/>
    </div>
  )
}

export default profile