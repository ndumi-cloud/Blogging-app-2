import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import '../sidebar.css';
import artist from '../../src/img/artist.jpg';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

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
          {cats.map((c) => (
            <li key={c._id} className="sidebarListItem">
              <Link to={`/?cat=${c.name}`} className="link">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
