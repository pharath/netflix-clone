import React, { useState } from 'react'
import './Signup_step1.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Signup_step1({email,password}) {

  const navigate=useNavigate();
  const[errorMessage,setErrorMessage]=useState(false);

  function showErrorMessage(){
    setErrorMessage(true);
  }

  function userAuthentication(){
    if(document.getElementById('userPasswordInput').value==password){
      navigate('/signup/plan');
    }
    else{
      showErrorMessage();
    }
  }

  return (
    <div className='inner-container'>
      {errorMessage && <div className="error-message">
        <img className='error-img' src='/Assets/error.png'></img>
        <span className='error'>Incorrect password.</span>&nbsp;Please try again 
      </div>}  
      <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
      <h2>Welcome back!<br></br>
      Joining Netflix is easy.</h2>
      <h6>Enter your password and you'll be watching in no time.</h6><br></br>
      <span>Email</span>
      <span className='userEmail'>{email}</span><br></br>
      <Form>
          <Form.Control id='userPasswordInput' className='password-input' type="password" placeholder="Enter your password" />
      </Form><br></br>
      <Button onClick={userAuthentication} variant="danger" className='btn-4'>Next</Button>
    </div>
  )
}
