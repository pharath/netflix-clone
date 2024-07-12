import React from 'react'
import './Signup.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Masterhead from '../Components/Masterhead'
import Globalfooter from '../Components/Globalfooter'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup() {

    const location = useLocation();
    const navigate=useNavigate();
    const { email } = location.state || {};

    function userRegister(){ //create account for new user
        const userInput=document.getElementById('userPasswordInput').value;
        fetch(`http://localhost:8080/api/register`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:userInput
            })
        })
        navigate('/signup/plan', {state:{email:email}});
    }

  return (
    <div>
        <a href='/' className="signout-btn">
            <h5 className='signout'>Sign Out</h5>
        </a>
        <Masterhead/>
        <div className="register-body">
            <div className="inner-body regform-inner-body">
                <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
                <h2>Create a password to start your membership</h2>
                <h6>Just a few more steps and you're done!<br></br>
                We hate paperwork, too.</h6><br></br>
                <Form className='addPassword'>
                    <Form.Control className='password-input add-password' type="email" defaultValue={email}/>
                    <Form.Control id='userPasswordInput' className='password-input add-password' type="password" placeholder="Add a password" /><br></br>
                </Form>
                <div className="check-box-add-password">
                    <Form.Check className='ch-box' aria-label="option 1" />&nbsp; Please do not email me Netflix special offers.
                </div><br></br>
                <Button onClick={userRegister} variant="danger" className='btn-4 register-next'>Next</Button>
            </div>
        </div>
        <Globalfooter/>
    </div>
  )
}
