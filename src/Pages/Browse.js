import React, { useState } from 'react'
import './Browse.css'
import { useLocation } from 'react-router-dom';
import ProfilePicker from '../Components/ProfilePicker'
import BrowserNav from '../Components/BrowserNav';

export default function Browse() {
  const[profilePick,setProfilePick]=useState(true);
  const [selectedProfile, setSelectedProfile] = useState('');
  const [profilesNavBar, setProfilesNavBar] = useState([]);

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
      {profilePick && <ProfilePicker hideProfilePick={hideProfilePick} setSelectedProfile={setSelectedProfile} email={email} setProfilesNavBar={setProfilesNavBar}/>}
      <div className="browse-container">
       <BrowserNav selectedProfile={selectedProfile} showProfilePick={showProfilePick} profilesNavBar={profilesNavBar} setSelectedProfile={setSelectedProfile}/>
      <div className="main-hero-playback">
         
      </div>  


      </div>
    </div>
  )
}
