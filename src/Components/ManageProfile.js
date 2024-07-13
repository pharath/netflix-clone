import React, { useState } from 'react'
import './ManageProfile.css'
import AddProfile from './AddProfile'
import ProfileManage from './ProfileManage'

export default function ManageProfile({hideManageProfile}) {
    const[addProfile,setAddProfile]=useState(false);
    function showAddProfile(){
        setAddProfile(true);
    }
    function hideAddProfile(){
        setAddProfile(false);
    }
  return (
    <div className='expand-Container'>
        {addProfile && <AddProfile hideAddProfile={hideAddProfile}/>} 
        <p className='text-light profile-pick-header'>Manage Profile:</p><br></br>
        <div className="profile-container">
            <div className="profile-preview-container">
                <ProfileManage/>
                <ProfileManage/>
            </div>
            <a onClick={showAddProfile} className="add-profile-container">
                <img className='add-img' src='./Assets/add.png'></img>
                <p className='profile-preview-name'>Add Profile</p>
            </a>
        </div>
        <a onClick={hideManageProfile} className="manage-profile-btn manage-done">
            <p className='manage-profile-btn-text'>Done</p>
        </a>
    </div>
  )
}
