import React, { useState } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GlobalFooter2 from '../Components/Globalfooter2';



export default function Login() {
    const[messageRateText,setMessageRateText]=useState(false);
    const[signInBtn,setSignInBtn]=useState(true);
    const[signInCodeBtn,setSignInCodeBtn]=useState(false);
    const[signCodeBtn,setSignCodeBtn]=useState(true);
    const[usePasswordBtn,setUsePassword]=useState(false);
    const[passwordInput,setPasswordInput]=useState(true);

    function usePassword(){
        setPasswordInput(true);
        setSignCodeBtn(true);
        setUsePassword(false);
        setMessageRateText(false);
        setSignInBtn(true);
        setSignInCodeBtn(false);
    }
    function useCode(){
        setPasswordInput(false);
        setSignCodeBtn(false);
        setUsePassword(true);
        setMessageRateText(true);
        setSignInBtn(false);
        setSignInCodeBtn(true);
    }

  return (
    <div>
        <div className="home-main-container">
          <div className="hero-masterhead">
            <img className='brand-logo barnd-logo-login' src='/Assets/Netflix-brand.png'></img>
          </div>
          <div className="login-container">
            <div className="login-inner-container">
                <h2 className='signin-header'>Sign In</h2>
                <Form.Control className='email-input-login py-3' type="email" placeholder="Email or mobile number" />
                {messageRateText && <p className='message-rate'>Message and data rates may apply</p>}      
                {passwordInput && <Form.Control className='email-input-login py-3' type="email" placeholder="Password" />} 
                {signInBtn && <Button variant="danger" className='btn-4 signin-btn2'>Sign In</Button>}             
                {signInCodeBtn && <Button variant="danger" className='btn-4 signin-btn2'>Send Sign-In Code</Button>}     
                <p className='signin-text'>OR</p>
                {signCodeBtn && <Button variant="light" onClick={useCode} className='text-light btn-4 signin-btn2 signin-btn-code'>Use a Sign-In Code</Button>}
                {usePasswordBtn && <Button variant="light" onClick={usePassword} className='text-light btn-4 signin-btn2 signin-btn-code'>Use Password</Button>}
                <div className="check-box signin-check-box">
                    <Form.Check className='ch-box' aria-label="option 1" />&nbsp; Remember me
                </div>
                <p className='new-to-netflix'>New to Netflix? <a href='/' className='signup-link'>Sign Up now.</a></p>
                <p className='signin-info'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-primary'>Learn more</span>.</p>
            </div>
          </div>     
        </div>
        <div className="home-main-shadow home-main-shadow2"></div>
        <div className="home-main-hero home-main-hero2"></div> 
        <GlobalFooter2/>
    </div>
  )
}
