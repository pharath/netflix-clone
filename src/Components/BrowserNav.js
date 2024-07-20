import React, { useState } from 'react';
import './BrowserNav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropDownProfile from './DropDownProfile';

export default function BrowserNav({selectedProfile,showProfilePick,profilesNavBar,setSelectedProfile}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdownToggle = (isOpen) => {
        setShowDropdown(isOpen);
      };
    
      const closeDropdown = () => {
        setShowDropdown(false);
      };
  return (
    <div>
    <Navbar className='nav-bar' variant='dark'>
    <Container className='navbar-masterhead'>
      <Navbar.Brand ><img className='nav-logo' src='./Assets/Netflix-brand.png'></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='tab-navBar' >Home</Nav.Link>
          <Nav.Link className='tab-navBar' >TV Show</Nav.Link>
          <Nav.Link className='tab-navBar' >Movies</Nav.Link>
          <Nav.Link className='tab-navBar' >New & Popular</Nav.Link>
          <Nav.Link className='tab-navBar' >My List</Nav.Link>
        </Nav>
        <Nav className='right-nav'>
          <Nav.Link className='right-btn-nav tab-navBar'><i class="bi bi-search"></i>&nbsp;&nbsp;&nbsp;</Nav.Link>
          <Nav.Link className='right-btn-nav tab-navBar'><i class="bi bi-bell"></i>&nbsp;&nbsp;&nbsp;</Nav.Link>
          <div className={`navBar-profileIcon ${selectedProfile}`}></div>
          <NavDropdown className='dropProfile custom-dropdown' id="collapsible-nav-dropdown" show={showDropdown} onToggle={handleDropdownToggle}>
            {profilesNavBar.map(profile => (
                    <DropDownProfile
                        profileName={profile.profileName} 
                        profilePicture={profile.profilePicture}
                        setSelectedProfile={setSelectedProfile}
                        closeDropdown={closeDropdown}
                    />
            ))}
            <NavDropdown.Item onClick={showProfilePick}><i class="bi bi-pencil"></i>Manage Profiles</NavDropdown.Item>
            <hr className='divider-dropmenu2'></hr>
            <a className='logout-dropItem' href="/signup/logout">Sign out of Netflix</a>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}
