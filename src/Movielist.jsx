import React from 'react'
import { MdLogout } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import Card from './Card';
import Buttonbottom from './Buttonbottom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'bootstrap';
function Movielist() {
  return (
<div className='moviepage'> 
    <div className='navbar'>
    <h2>My movies <Link className='linkt' to='/createnewmovie'><BsPlusCircle className='iconcircless'/></Link></h2>
    <Link className='logoutbtn' to='/'>
    <p className='logout'>Logout <MdLogout /></p>
    </Link>
       
        </div>
        <div>
 <Card/> 
 <Buttonbottom/>
        </div>
      
   
</div>
  )
}

export default Movielist