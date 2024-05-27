/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img src='../img/winter.jpg'
        alt=''
        className='writeImage'
        />
        <form className='writeform'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                   ?
                </label>
                <input type='file' id='fileInput' style={{display:'none'}}/>
                <input type='text' placeholder='Title' className='writeInput' autofocus={true} />
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className='writePublish'>Submit</button>
        </form>

    </div>
  )
}
