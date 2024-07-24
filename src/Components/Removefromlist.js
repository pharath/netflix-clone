import React, { useState } from 'react';

export default function Removefromlist({placement}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
    };
  return (
    <div className="circle-btn list-hover" onClick={handleClick}>
        <i class="bi bi-check-lg list-action"></i>
        {!isClicked && <div className={`hoverText ${placement}`}>Remove from my list</div>} 
    </div>
  )
}
