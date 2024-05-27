/* eslint-disable no-unused-vars */
import React from 'react'
import './Single.css'
import Sidebar from '../../components/sidebar'
import SinglePost from '../../components/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost />  
        <Sidebar />
    </div>
  )
}
