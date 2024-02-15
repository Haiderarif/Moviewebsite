// import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Button({name}) {
    const handleClick=()=>{
// console.log(`${name} clicked`)
    }
  return (
    <div>
        <div>
            <button onClick={handleClick} className='button'>
        
              {name}
             
          
            </button>
        </div>
    </div>
  )
}

export default Button