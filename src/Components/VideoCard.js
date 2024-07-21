import React, { useState, useEffect } from 'react';
import './VideoCard.css';
import VideoCardInfo from './VideoCardInfo';

export default function VideoCard() {
  const [showInfo, setShowInfo] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowInfo(true);
    }, 800);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(timeout);
  };
  const handleMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setShowInfo(false);
  };
  return (
    <div className='vCard-Container v1' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showInfo && <VideoCardInfo/>}
    </div>
  );
}
