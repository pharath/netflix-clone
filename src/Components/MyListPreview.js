import React from 'react'
import './MyListPreview.css'

export default function MyListPreview() {
    function removeFromList(){

    }
  return (
    <div className='MyListPreview-container'>
        <div className="innerMyListPreview">
            <div className="div0"><i class="bi bi-three-dots-vertical"></i></div>
            <div className="previewImg witcher_thumbnail"></div>
            <div className="div1">The Witcher</div>
            <div className="div2">2019</div>
            <div className="div3">Action - SciFic</div>
            <div className="div4" onClick={removeFromList}><i class="bi bi-x-lg"></i></div>
            <div className="div01"><i class="bi bi-three-dots-vertical"></i></div>
        </div>
        <div className="divider2"></div>
    </div>
  )
}
