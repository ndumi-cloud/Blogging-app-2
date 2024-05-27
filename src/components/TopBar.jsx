import React from 'react';
import '../components/topbar.css';
import { Link } from 'react-router-dom';
import chatbot from '../../src/img/images.png';

export default function TopBar({ setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='top'>
      <div className='topLeft'></div>
      <div className='topCenter'>
        <ul className='topList'>
          <div>
            <div className='img'>
              <a href='https://blogappchatbot.streamlit.app/'>
                <img src={chatbot} alt="chatbox" width="20px" />
              </a>
            </div>
          </div>
          <li className='topListItem'><Link to={'/'}>Home</Link></li>
          <li className='topListItem'><Link to={'/Settings'}>Settings</Link></li>
          <li className='topListItem'><Link to={'/Register'}>Register</Link></li>
          <li className='topListItem'><Link to={'/write'}>Write</Link></li>
          <li className='topListItem'><Link to={'/Login'}>Login</Link></li>
        </ul>
      </div>
      <div className='topRight'></div>
      <div className='container'>
        <input
          type='text'
          className='searchbar'
          placeholder='Search...'
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
