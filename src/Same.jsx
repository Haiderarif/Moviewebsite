import React from 'react'
import Button from './Button'
import { LuDownload } from "react-icons/lu";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Same({newMovie, title, btn}) {
    const movie=()=>{
        
    }
  return (
    <div className='createpage'>
        <h2>{title}</h2>
        <div className='contenthere'>
        <div className='emptyborder' >
          <div className='column'>
          <p className='iconstyling'><LuDownload /></p>
           <p>Drop an image here</p>
          </div>
     
          </div>
          <div className='secondpart'>
            <input className='fullline input-main' type="text" required placeholder='Title'/><br />
            <input className='halfline input-main' type="text" required placeholder='Publishing year'/><br />
            <button className='buttonsetting1'>
              Cancel
            </button>
            <Link to='/'>
            <button className='buttonsetting2'>
          {btn}
        </button>
            </Link>
      
          </div>

        </div>
        

    </div>
  )
}

export default Same