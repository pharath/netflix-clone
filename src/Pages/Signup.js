import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Signup.css'
import Masterhead from '../Components/Masterhead';
import Globalfooter from '../Components/Globalfooter';
import Signup_step1 from '../Components/Signup_step1';

export default function Signup() {
  
  const location = useLocation();
  const { email, password } = location.state;
 
  return (
    <div>
        <Masterhead/>
        <div className="body-container">  
          <Signup_step1 email={email} password={password}/>
        </div>
        <Globalfooter/>
    </div>
  )
}
