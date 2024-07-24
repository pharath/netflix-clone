import React from 'react'
import './MyList.css'
import MyListPreview from './MyListPreview'

export default function MyList() {
  return (
    <div className='myListContainer'>
        <div className="myList-inner">
          <p className='text-light add-profile-header cancel-bottom myListHeading'>My List</p><br></br><br></br>
          <div className="divider"></div>
          <MyListPreview/>
          <MyListPreview/>
          <MyListPreview/>
          <MyListPreview/>
          <MyListPreview/>
          <MyListPreview/>
        </div>
    </div>
  )
}
