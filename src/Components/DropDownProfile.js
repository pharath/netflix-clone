import React from 'react'
import './DropDownProfile.css'

export default function DropDownProfile({profilePicture,profileName,setSelectedProfile,closeDropdown}) {
  return (
    <div className='dropDownContainer' onClick={() => {closeDropdown(); setSelectedProfile(profilePicture);}}>
        <div className={`profile-icon-dropdown ${profilePicture}`}></div>
        <p className='cancel-bottom profile-name-dropdown'>{profileName}</p>
    </div>
  )
}
