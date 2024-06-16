import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './home.css';
import Header from '../../components/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../components/sidebar';
import { Context } from "../../context/Context";

export default function Homepage({ searchQuery }) {
  const { posts, refreshPosts } = useContext(Context);
  const { search } = useLocation();

  useEffect(() => {
    refreshPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="Home">
        <Posts searchQuery={searchQuery} posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
