import React, { useState } from 'react'
import './Signin_component.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Signin_component({email}) {

  const navigate=useNavigate();
  const[errorMessage,setErrorMessage]=useState(false);
  const [borderColor, setBorderColor] = useState('');

  function showErrorMessage(){
    setErrorMessage(true);
  }

  async function userAuthentication(){ //check, is loging credentials are correct
    let inputPassword=document.getElementById('userPasswordInput').value;
    if(inputPassword==''){
      setBorderColor('red');
    }
    else{
    fetch(`http://localhost:8080/api/authenticator/${email}/${inputPassword}`)
    .then(response => {
      return response.json();
    })
    .then(async data => {
      if (data) {
        const isSubscriptionValid = await validateSubscription();
        if(isSubscriptionValid){
            //navigate home
        }
        else{
        navigate(`/signup/plan`,{state:{email:email}});
        }
      } 
      else {
        showErrorMessage();
      }
    })

  async function validateSubscription(){ //check, is subscription valid
    const response = await fetch(`http://localhost:8080/api/subscribe/${email}`);
    const data = await response.json();
    return data;
  }
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
          <Form.Control id='userPasswordInput' className='password-input' type="password" placeholder="Enter your password" style={{ borderColor: borderColor }}/>
      </Form><br></br>
      <Button onClick={userAuthentication} variant="danger" className='btn-4'>Next</Button>
    </div>
  )
}
