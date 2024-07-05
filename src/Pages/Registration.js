import React from 'react'
import './Registration.css'
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Button from 'react-bootstrap/Button';

export default function Registration() {
  return (
    <div>
        <a href='/' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="register-body">
            <div className="inner-body">
                <img className='registerimg' src='/Assets/register-img.png'></img><br></br>
                <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
                <h2>Finish setting up your account.</h2>
                <h6>Netflix is personalized for you.<br></br> Create a password to watch on any device at any time.</h6><br></br>
                <Button href='/signup/regform' variant="danger" className='btn-4 register-next'>Next</Button>
            </div>
        </div>
        <Globalfooter/>
    </div>
  )
}
