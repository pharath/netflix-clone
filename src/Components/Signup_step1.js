import React from 'react'
import './Signup_step1.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup_step1({hideStep1,showStep2}) {
  return (
    <div className='inner-container'>
      <span>STEP <span className='bold'>1</span> OF <span className='bold'>3</span></span>
      <h2>Welcome back!<br></br>
      Joining Netflix is easy.</h2>
      <h6>Enter your password and you'll be watching in no time.</h6><br></br>
      <span>Email</span>
      <span className='userEmail'>example@gmail.com</span><br></br>
      <Form>
          <Form.Control className='password-input' type="password" placeholder="Enter your password" />
      </Form><br></br>
      <Button variant="danger" onClick={() => { hideStep1(); showStep2(); }} className='btn-4'>Next</Button>
    </div>
  )
}
