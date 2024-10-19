import React from 'react'
import imagen from "../assets/Vector.png"
import "./buttons.css"


const buttons = () => {
  return (
    <div className='button'>
        <button>Follow</button>
        <button>
            <img src={imagen} alt="" />
        </button>
    </div>
  )
}

export default buttons