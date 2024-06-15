import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Post.css";


export default function Post({ post }) {

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState ([]);
  const [newComment, setNewComment] = useState ('')
  const handleLike = () => {
    setLikes(likes + 1);
  };
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
   {post.photo && (
      <img src={PF + post.photo} alt="Post" className="postImg" />)}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
         <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        </div>
        <span className="postTitle">
          <p>{post.title}</p>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
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
      <p className="postDesc">{post.description}</p>
    </div>
  );
}
