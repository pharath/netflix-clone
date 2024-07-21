import React from 'react'
import './VideoCardInfo.css'

export default function VideoCardInfo({videoTitle,videoCategory,videoRating,releaseYear,thumbnail}) {
  return (
    <div className='VideoCardInfo-Card'>
        <div className={`preview-img ${thumbnail}`}></div>
        <div className="btn-container-card">
        <div className="circle-btn circle-btn2 circle-btn2-play"><i class="bi bi-play-fill"></i></div>
        <div className="circle-btn circle-btn2"><i className="bi bi-plus-lg"></i></div>
        <div className="circle-btn circle-btn2"><i class="bi bi-hand-thumbs-up"></i></div><div className="space-div"></div>
        <div className="circle-btn circle-btn2"><i class="bi bi-chevron-down"></i></div>
        </div>
        <p className='cancel-bottom VideoCardInfo-Card-title mb-2'>{videoTitle}</p>
        <div className="rating-year  mb-2">
        <p className='cancel-bottom VideoCardInfo-Card-sub1'>{videoRating} Rating</p> <p className='cancel-bottom movie-year'>{releaseYear}</p></div>
        <div className="catagory">
            <p className='cancel-bottom movie-category'>{videoCategory}</p>
        </div>
    </div>
  )
}
