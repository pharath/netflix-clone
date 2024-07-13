import React from 'react'
import './ProfileManage.css'

export default function ProfileManage() {
    let profileName="My Profile";
  return (
    <div>
        <div className="profile-preview profile-manage">
        <div className="profile-preview-overlay"></div>
            <img className='edit-cover' src='./Assets/edit.png'></img>
            <p className='profile-preview-name'>{profileName}</p>
        </div>
    </div>
  )
}
