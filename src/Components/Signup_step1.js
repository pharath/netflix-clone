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

  async function userAuthentication(){ //check is password matching and subscription is valid
    if(document.getElementById('userPasswordInput').value==password){
      const isSubscriptionValid = await validateSubscription();
      if(isSubscriptionValid){
        //navigate home
      }
      else{
        navigate(`/signup/plan`);
      }
    }
    else{
      showErrorMessage();
    }
  }

  async function validateSubscription(){ //if subscription is valid return TRUE else FALSE
    const response = await fetch(`http://localhost:8080/api/subscribe/${email}`);
    const data = await response.json();
    return data;
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
