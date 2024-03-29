import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { config } from "../config.js";

const initContext = {
  loading: false,
  comments: [],
};

export const DataContext = createContext(initContext);

const DataContextProvider = (props) => {
  const [loading, setLoading] = useState(initContext.loading);
  const [comments, setComments] = useState(initContext.comments);

  const getComments = () => {
    axios
      .get(`${config.serverURL}/api/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err.message));
  };

  const addComment = (e, user, image, postComment) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    axios
      .post(
        `${config.serverURL}/api/comments`,
        JSON.stringify({
          comment: postComment,
          userId: user._id,
          userName: user.name,
          img: image,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => getComments())
      .catch((err) => console.log(err.message));
  };

  const updateComment = (id, likeCount) => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        `${config.serverURL}/api/comments/${id}`,
        { likeCount: likeCount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const updatedComments = comments.map((comment) =>
          comment._id === id
            ? { ...comment, likeCount: comment.likeCount + 1 }
            : comment
        );
        setComments(updatedComments);
      })
      .catch((err) => console.log(err.message));
  };

  const deleteComment = (id) => {
    const token = localStorage.getItem("token");

    axios
      .delete(`${config.serverURL}/api/comments/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const updatedComments = comments.filter(
          (comment) => comment._id !== id
        );
        setComments(updatedComments);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        comments,
        setComments,
        getComments,
        addComment,
        updateComment,
        deleteComment,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
