import React from "react";
import "./Post.css";

export default function Post({ title, category, description, image }) {
  return (
    <div className="post">
      <img src={image} alt="Post" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{category}</span>
        </div>
        <span className="postTitle">
          <p>{title}</p>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
         <button onClick={handleLike}>Like ({likes})</button>
        <input className="comment-input"
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={handleCommentChange} />
        <button className="comment-button"
        onClick={handleComment}>Comment</button>
        {comments.map((comment, index) => (<p key={index} className="comment"> {comment} </p>))}
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
