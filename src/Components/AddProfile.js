import React, { useState } from 'react';
import './AddProfile.css'
import Form from 'react-bootstrap/Form';

export default function AddProfile({hideAddProfile}) {

    const [inputValue, setInputValue] = useState('');
    const buttonClassName=inputValue?'add-profile-btn1 active':'add-profile-btn1';

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

  return (
    <div className='expand-Container'>
        <div className="add-profile-inner">
            <p className='text-light add-profile-header cancel-bottom'>Add Profile</p>
            <p className='add-profile-sub cancel-bottom'>Add a profile for another person watching Netflix.</p>
            <hr className='add-profile-line'></hr>
            <div className="add-profile-inner-container">
                <div className="profile-pic"></div>
                <Form.Control className='add-profile-name' type="text" placeholder="Name" value={inputValue} onChange={handleInputChange}/>
                <Form.Check className='kid-check' type="checkbox" label="Kid?" />
            </div>
            <hr className='add-profile-line'></hr><br></br>
            <div className="btn-container-add">
                <a onClick={hideAddProfile} className={buttonClassName}>Continue</a>
                <a onClick={hideAddProfile} className="add-profile-btn2">Cancel</a>
            </div>
        </div>
    </div>
  )
}
