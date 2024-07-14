import React, { useState } from 'react'
import './ProfilePicker.css'
import ProfilePreview from './ProfilePreview'
import AddProfile from './AddProfile'
import ManageProfile from './ManageProfile';

export default function ProfilePicker() {
    const[addProfile,setAddProfile]=useState(false);
    const[manageProfile,setManageProfile]=useState(false);
    function showAddProfile(){
        setAddProfile(true);
    }
    function hideAddProfile(){
        setAddProfile(false);
    }
    function showManageProfile(){
        setManageProfile(true);
    }
    function hideManageProfile(){
        setManageProfile(false);
    }
  return (
    <div className='expand-Container'>
        {addProfile && <AddProfile hideAddProfile={hideAddProfile}/>} 
        {manageProfile && <ManageProfile hideManageProfile={hideManageProfile}/>}   
        <p className='text-light profile-pick-header'>Who's watching?</p><br></br>
        <div className="profile-container">
            <div className="profile-preview-container">
                <ProfilePreview/>
                <ProfilePreview/>
            </div>
            <a onClick={showAddProfile} className="add-profile-container">
                <img className='add-img' src='./Assets/add.png'></img>
                <p className='profile-preview-name'>Add Profile</p>
            </a>
        </div>
        <a onClick={showManageProfile}  className="manage-profile-btn">
            <p className='manage-profile-btn-text'>Manage Profiles</p>
        </a>
    </div>
  )
}
