import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./FullPost.css";

const FullPost = () => {
  const { id } = useParams();
  const [loadedPost, setLoadedPost] = useState(null);

  useEffect(() => {
    if (id) {
      if (!loadedPost || (loadedPost && loadedPost.id !== id)) {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            setLoadedPost(response.data);
          });
      }
    }
  }, [id, loadedPost]);

  const deletePostHandler = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
      console.log(response);
    });
  };

  let post = <p style={{ textAlign: "center" }}>Please select a Post</p>;
  if (id) {
    post = <p style={{ textAlign: "center" }}>Loading...</p>;
  }
  if (loadedPost) {
    post = (
      <div className="full-post">
        <h2>{loadedPost.title}</h2>
        <p>{loadedPost.body}</p>
        <div>
          <button onClick={deletePostHandler} className="delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
  return post;
};

export default FullPost;
