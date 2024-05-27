/* eslint-disable no-unused-vars */
import React from 'react'
import '../components/topbar.css'
import { Link } from 'react-router-dom'
import chatbot from '../../src/img/images.png'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'></div>
        {/* add icons classname topIcon*/}
        <div className='topCenter'>
            <ul className='topList'>
            <div>
              <div className='img'>
              <a href='https://blogappchatbot.streamlit.app/'>
                <img src={chatbot} alt="chatbox"  width="20px" /></a></div>
                </div>
              <li className='topListItem'><Link to={'/'}>Home</Link></li>
              <li className='topListItem'><Link to={'/Settings'}>Settings</Link></li>
              <li className='topListItem'><Link to={'/Register'}>Register</Link></li>
              <li className='topListItem'><Link to={'/write'}>Write</Link></li>
              <li className='topListItem'><Link to={'/Login'}>Login</Link></li>
            </ul>
        </div>
        <div className='topRight'>
            {/* search icon classname topSearchIcon */}
        </div>

    </div>
  )
}

