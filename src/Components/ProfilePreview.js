import React from 'react'
import './ProfilePreview.css'

export default function ProfilePreview({profileName,profilePicture,hideProfilePick,setSelectedProfile}) {
  return (
    <div>
        <a className={`profile-preview ${profilePicture}`} onClick={() => {hideProfilePick();setSelectedProfile(profileName);}}>
            <p className='profile-preview-name'>{profileName}</p>
        </a>
    </div>
  )
}
