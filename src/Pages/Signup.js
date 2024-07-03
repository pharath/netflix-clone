import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './Signup.css'
import Masterhead from '../Components/Masterhead';
import Globalfooter from '../Components/Globalfooter';
import Signup_step1 from '../Components/Signup_step1';
import Signup_step2 from '../Components/Signup_step2';

export default function Signup() {
  const[step2,setStep2]=useState(false);
  const[step1,setStep1]=useState(true);
  function showStep1(){
    setStep1(true);
  }
  function hideStep1(){
    setStep1(false);
  }
  function showStep2(){
    setStep2(true);
  }
  function hideStep2(){
    setStep2(false);
  }
  return (
    <div>
        <Masterhead/>
        <div className="body-container">  
          {step1 && <Signup_step1 hideStep1={hideStep1} showStep2={showStep2}/>}
          {step2 && <Signup_step2/>}
        </div>
        <Globalfooter/>
    </div>
  )
}
