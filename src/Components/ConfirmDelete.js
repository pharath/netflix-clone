import React from 'react'
import './ConfirmDelete.css'

export default function ConfirmDelete({hideDeleteProfile,hideEditProfile}) {
  return (
    <div className='expand-Container'>
        <div className="inner-delete">
            <p className='cancel-bottom delete-heading'>Delete Profile?</p>
            <hr className='edit-line'></hr>
            <div className="delete-inner">
                <div className="delete-left">
                    <p className='cancel-bottom delete-profile-name'>My Profile</p>
                </div>
                <div className="delete-right-side">
                    <p className='cancel-bottom delete-sub'>This profile's history - including My List, ratings and activity - will be gone forever, and you won't be able to access it again.</p>
                </div>
            </div>
            <hr className='edit-line delete-bottom-line'></hr>
            <div className="btn-container-add">
                <a onClick={hideDeleteProfile} className='add-profile-btn2 save-btn-profile keepP'>Keep Profile</a>
                <a onClick={hideEditProfile} className="add-profile-btn2 edit-profile-btns deleteP">Delete Profile</a>
            </div>
        </div>
    </div>
  )
}
