import React, { useContext, useState } from "react";
import axios from "../../axios";
import { Context } from "../../context/Context";
import { useNavigate } from 'react-router-dom';
import { UpdateStart, UpdateSuccess, UpdateFailure } from '../../context/Actions'; // Assuming you have action creators for update

import './write.css';
import write from '../../img/pen-paper.jpg';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error('User is not logged in');
      // You can redirect to login page or handle as per your application's logic
      return;
    }

    dispatch(UpdateStart()); // Set loading state for update

    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error('Error uploading file:', err);
        dispatch(UpdateFailure()); // Handle upload failure
        return;
      }
    }

    try {
      const res = await axios.post('/posts', newPost);
      dispatch(UpdateSuccess(res.data)); // Update user state after successful post
      window.location.replace('/post/' + res.data._id)
      // navigate(`/post/${res.data._id}`);
    } catch (err) {
      console.error('Error creating post:', err);
      dispatch(UpdateFailure()); // Handle post creation failure
    }
  };

  return (
    <div className='write'>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className='writeform' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>Choose File:</label>
          <input type='file' id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
          <input type='text' placeholder='Title' className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Tell your story...' className='writeInput writeText' onChange={(e) => setDesc(e.target.value)} />
        </div>
        <button className='writePublish' type='submit'>Submit</button>
      </form>
    </div>
  );
}
