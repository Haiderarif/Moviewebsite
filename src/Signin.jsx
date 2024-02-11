import React from 'react'
import Button from './Button'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Signin(props) {
  return (
    <div className='page'>
        <div className='signinpage'>
            <h1>Sign in</h1>
            <input type="email" className='input-main' required placeholder='Email' /><br /><br />
            <input className='pass input-main' type="password" required placeholder='Password' /><br />
            <div className='icon'>
            <MdCheckBoxOutlineBlank/>
            <p className='line'>  Remember me</p>
            </div>
            <Link className='linkt' to='/emptystate'>
            <Button name= "Login"/>
            </Link>
            
        </div>
    </div>
  )
}

export default Signin