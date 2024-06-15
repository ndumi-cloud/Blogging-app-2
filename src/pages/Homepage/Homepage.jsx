import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { useLocation } from 'react-router-dom';
import './home.css';
import Header from '../../components/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../components/sidebar'; // Corrected import

export default function Homepage({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]); // Include 'search' in the dependency array to fetch posts on search change

  return (
    <>
      <Header />
      <div className='Home'>
        <Posts searchQuery={searchQuery} posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
