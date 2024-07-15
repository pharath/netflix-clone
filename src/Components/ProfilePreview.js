import React from 'react'
import './ProfilePreview.css'

export default function ProfilePreview({profileName,profilePicture}) {
  return (
    <div>
        <div className={`profile-preview ${profilePicture}`}>
            <p className='profile-preview-name'>{profileName}</p>
        </div>
    </div>
  )
}
