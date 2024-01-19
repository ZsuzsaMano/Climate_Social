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

  useEffect(() => {
    getComments();
  }, []);
  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        comments,
        setComments,
        getComments,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
