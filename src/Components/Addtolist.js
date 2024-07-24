import React, { useState } from 'react';

export default function Addtolist({placement}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
    };
  return (
    <div className="circle-btn list-hover" onClick={handleClick}>
        <i className="bi bi-plus-lg list-action"></i>
        {!isClicked && <div className={`hoverText ${placement}`}>Add to my list</div>}  
    </div>
  )
}
