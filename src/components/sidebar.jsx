/* eslint-disable no-unused-vars */
import React from 'react'
import '../sidebar.css'
import artist from '../../src/img/artist.jpg'


export default function sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        src={artist}
        alt=""
      />
      <p>
      Emma Thompson, an inspired writer and author, transforms ordinary experiences into extraordinary narratives. Growing up in the countryside, the serene landscapes fueled her imagination. With a pen in hand and a heart full of passion, Emma explores themes of love, resilience, and transformation. Her books resonate deeply with readers, leaving an indelible mark. Through her evocative prose, she continues to inspire aspiring writers worldwide.
      </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Sport</li>
                <li className='sidebarListItem'>Cinema</li>
                <li className='sidebarListItem'>Tech</li>
            </ul>
            
        </div>
    </div>
  )
}
