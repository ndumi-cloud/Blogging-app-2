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
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
