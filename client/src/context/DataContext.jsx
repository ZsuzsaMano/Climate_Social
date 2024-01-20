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

  const updateComment = (id, likeCount) => {
    axios
      .patch(`${config.serverURL}/api/comments/${id}`, { likeCount: likeCount })
      .then((res) => console.log("liked"))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getComments();
  }, [updateComment]);
  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        comments,
        setComments,
        getComments,
        updateComment,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
