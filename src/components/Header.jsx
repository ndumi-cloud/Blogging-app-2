/* eslint-disable no-unused-vars */
import React from 'react'
import '../header.css'
import sunrise from '../../src/img/sunrise.jpg'

export default function Header() {
  return (
    <>
    <div className='headerTitles'>
          <span className='headerTitleSm'>Welcome to </span>
          <span className='headerTitleLg'>BeSocial</span>
      </div>
      <img className='headerImg'
          src={sunrise}
          alt='' />
    </>
  )
}
