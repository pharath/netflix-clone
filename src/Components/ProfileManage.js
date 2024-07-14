import React, { useState } from 'react'
import './ProfileManage.css'
import EditProfile from './EditProfile';

export default function ProfileManage() {
    const[editProfle,setEditProfile]=useState(false);
    let profileName="My Profile";
    function showEditProfile(){
      setEditProfile(true);
    }
    function hideEditProfile(){
      setEditProfile(false);
    }
  return (
    <div>
        {editProfle && <EditProfile hideEditProfile={hideEditProfile}/>}     
        <a onClick={showEditProfile}  className="profile-preview profile-manage">
        <a className="profile-preview-overlay"></a>
            <img className='edit-cover' src='./Assets/edit.png'></img>
            <p className='profile-preview-name'>{profileName}</p>
        </a>
    </div>
  )
}
