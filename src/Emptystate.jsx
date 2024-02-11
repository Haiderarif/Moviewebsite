import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Emptystate() {
  return (
    <div className='emptypage'>
        <div className='emptystate'>
            <h1>Your movie list is empty</h1> 
            <Link className='linkt' to='/createnewmovie'>
            <Button name="Add Movie" />
            </Link>
            
        </div>
    </div>
  )
}

export default Emptystate