import React from 'react'
import './ProfilePreview.css'

export default function ProfilePreview() {
    let profileName="My Profile";
  return (
    <div>
        <div className="profile-preview">
            <p className='profile-preview-name'>{profileName}</p>
        </div>
    </div>
  )
}
