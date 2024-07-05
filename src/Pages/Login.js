import React, { useState } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Globalfooter from '../Components/Globalfooter';

export default function Login() {
    const[signBtnText,setSignBtnText]=useState('Sign In');
    const[signCodeBtn,setSignCodeBtn]=useState(true);
    const[usePasswordBtn,setUsePassword]=useState(false);
    const[passwordInput,setPasswordInput]=useState(true);

    function usePassword(){
        setPasswordInput(true);
        setSignBtnText('Sign In');
        setSignCodeBtn(true);
        setUsePassword(false);
    }
    function useCode(){
        setPasswordInput(false);
        setSignBtnText('Send Sign-In Code');
        setSignCodeBtn(false);
        setUsePassword(true);
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
                {passwordInput && <Form.Control className='email-input-login py-3' type="email" placeholder="Password" />}              
                <Button className='btn-4 signin-btn2'>{signBtnText}</Button>
                <p className='signin-text'>OR</p>
                {signCodeBtn && <Button onClick={useCode} className='btn-4 signin-btn2 signin-btn-code'>Use a Sign-In Code</Button>}
                {usePasswordBtn && <Button onClick={usePassword} className='btn-4 signin-btn2 signin-btn-code'>Use Password</Button>}
                <div className="check-box signin-check-box">
                    <Form.Check className='ch-box' aria-label="option 1" />&nbsp; Remember me
                </div>
                <p className='new-to-netflix'>New to Netflix? <a href='/' className='signup-link'>Sign Up now.</a></p>
                <p className='signin-info'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-primary'>Learn more</span>.</p>
            </div>
          </div>     
        </div>
        <div className="home-main-shadow"></div>
        <div className="home-main-hero"></div> 
        <Globalfooter/>
    </div>
  )
}
