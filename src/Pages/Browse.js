import React, { useState } from 'react'
import './Browse.css'
import { useLocation } from 'react-router-dom';
import ProfilePicker from '../Components/ProfilePicker'

export default function Browse() {
  const[profilePick,setProfilePick]=useState(true);
  const [selectedProfile, setSelectedProfile] = useState('');

  const location = useLocation();
  const email = location.state?.email;

  function showProfilePick(){
    setProfilePick(true);
  }
  function hideProfilePick(){
    setProfilePick(false);
  }
  return (
    <div>
      {profilePick && <ProfilePicker hideProfilePick={hideProfilePick} setSelectedProfile={setSelectedProfile} email={email}/>}
      <div className="browse-container">
       
      


      </div>
    </div>
  )
}
