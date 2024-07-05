import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './Signup.css'
import Masterhead from '../Components/Masterhead';
import Globalfooter from '../Components/Globalfooter';
import Signup_step1 from '../Components/Signup_step1';

export default function Signup() {
 
  return (
    <div>
        <Masterhead/>
        <div className="body-container">  
          <Signup_step1/>
        </div>
        <Globalfooter/>
    </div>
  )
}
