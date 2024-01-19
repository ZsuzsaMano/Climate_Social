import React from "react";
import SinglePost from "./SinglePost";
import Loader from "./Loader";

const Board = () => {
  const messages = [
    { text: "hey", _id: 1, author: "XY" },
    { text: "ho", _id: 2, author: "who" },
  ];
  const yourName = "Caro";
  const loading = false;

  return (
    <div className="main__box">
      {loading && <Loader />}
      {messages.map((message) => (
        <SinglePost yourName={yourName} message={message} key={message._id} />
      ))}
    </div>
  );
};

export default Board;
