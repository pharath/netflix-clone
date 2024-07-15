import React, { useState } from 'react';
import './AddProfile.css'
import Form from 'react-bootstrap/Form';

export default function AddProfile({hideAddProfile}) {

    const [profileName, setInputValue] = useState('');
    const buttonClassName=profileName?'add-profile-btn1 active':'add-profile-btn1';

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const userEmail="test";

    function addProfile(){
        if(profileName==''){
            //add ProfileName error
        }
        else{
            createProfile(userEmail,profileName); 
            hideAddProfile();
        }
    }

    function createProfile(userEmail,profileName){ // create new profile (default Settings) on the email
        fetch(`http://localhost:8080/api/profile/add`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:userEmail,
                profileName:profileName
            })
        })
    }

  return (
    <div className='expand-Container'>
        <div className="add-profile-inner">
            <p className='text-light add-profile-header cancel-bottom'>Add Profile</p>
            <p className='add-profile-sub cancel-bottom'>Add a profile for another person watching Netflix.</p>
            <hr className='add-profile-line'></hr>
            <div className="add-profile-inner-container">
                <div className="profile-pic"></div>
                <Form.Control id='userInput' className='add-profile-name' type="text" placeholder="Name" value={profileName} onChange={handleInputChange}/>
            </div>
            <hr className='add-profile-line'></hr><br></br>
            <div className="btn-container-add">
                <a onClick={addProfile} className={buttonClassName}>Continue</a>
                <a onClick={hideAddProfile} className="add-profile-btn2">Cancel</a>
            </div>
        </div>
    </div>
  )
}
