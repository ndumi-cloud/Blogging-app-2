/* eslint-disable no-unused-vars */
import React from 'react'
import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            {/*<img 
                src='../images/blog.jpg'
                alt=''
                className='singlePostImg'
             />*/}
                <h1 className='singlePostTitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author</span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla dicta corporis quia cumque dolor quidem, labore quibusdam velit doloribus est soluta magnam tempore, illum eum in natus nam assumenda.</p>
                <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio atque saepe nulla nam repellendus quidem illo fugit iusto quod laboriosam sit maxime, qui, ducimus eligendi pariatur quia? Iure, alias inventore!</p>
        </div>
    </div>
  )
}
