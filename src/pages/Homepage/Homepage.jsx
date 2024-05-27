
/* eslint-disable no-unused-vars */
import React from 'react'
import './home.css'
import Header from '../../components/Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../components/sidebar'

export default function Homepage({searchQuery}) {
  return (
    <>
    <Header />
    <div className='Home'>
      <Posts searchQuery={searchQuery} />
      <Sidebar />

    </div>
    </>
  )
}
