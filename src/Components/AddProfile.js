import React, { useState } from 'react';
import './AddProfile.css'
import Form from 'react-bootstrap/Form';

export default function AddProfile({hideAddProfile,email}) {

    const [profileName, setInputValue] = useState('');
    const buttonClassName=profileName?'add-profile-btn1 active':'add-profile-btn1';

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    function addProfile(){
        if(profileName==''){
            //add ProfileName error
        }
        else{
            createProfile(email,profileName); 
            hideAddProfile();
        }
    }

    function createProfile(email,profileName){ // create new profile (default Settings) on the email
        fetch(`http://localhost:8080/api/profile/add`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                profileName:profileName,
                profilePicture:"icon i1"
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
                <div className="profile-pic i1"></div>
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
