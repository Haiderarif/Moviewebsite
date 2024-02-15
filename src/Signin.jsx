import React, { useState } from 'react'
import Button from './Button'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Container from 'react-bootstrap/Container';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import "Bootstrap/dist/css/bootstrap.min.css"

function Signin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
const history = useHistory();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Check if email and password are filled
    if (email && password) {
      // Perform form submission logic
      console.log('Form submitted:', { email, password });
      history.push('/movielist');
    }
  };
  return (
  
    <div className='page'>


        <div className='signinpage'>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
            <input 
            type="email" className='input-main' 
            required
            value={email}
            onChange={handleEmailChange}
            placeholder='Email' /><br /><br />
       {formSubmitted && !email && <span className="required">Email is required</span>}

            <input className='pass input-main' 
            type="password" 
            required 
            value={password}
            onChange={handlePasswordChange}

            placeholder='Password' /><br />
         {formSubmitted && !password && <span className="required">Password is required</span>}

            <div className='icon'>
              <div className='icon-style'>
              </div>
            <p className='line'>Remember me</p>
            </div>
         <Link to ='/emptystate'>
         </Link>

         <Button name= "Login"/>

              
            </form>
        
        </div>
       
    </div>
   
  )
}

export default Signin