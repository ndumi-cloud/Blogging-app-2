/* eslint-disable no-unused-vars */
import React from 'react'
import '../sidebar.css'

export default function sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        src="../img/artist.jpg"
        alt=""
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
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
