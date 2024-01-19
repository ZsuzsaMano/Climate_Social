import React from "react";

const SinglePost = ({ message, yourName }) => {
  const d = new Date().toUTCString();
  return (
    <div
      className={
        message.author === yourName ? "chatbubble mymessage" : "chatbubble"
      }
    >
      <p className="">{message.author}</p>
      <p className="">{message.text}</p>
      <p className="">{d}</p>
    </div>
  );
};

export default SinglePost;
