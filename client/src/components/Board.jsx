import React from "react";
import SinglePost from "./SinglePost";
import Loader from "./Loader";

const Board = () => {
  const messages = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque, ut unde ipsam quos molestiae ab pariatur harum, enim, nobis obcaecati distinctio! Neque sapiente error excepturi enim sunt cum ipsum.",
      _id: 1,
      author: "XY",
      img: "https://images.pexels.com/photos/16645549/pexels-photo-16645549/free-photo-of-cabbage-leaves.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque, ut unde ipsam quos molestiae ab pariatur harum, enim, nobis obcaecati distinctio! Neque sapiente error excepturi enim sunt cum ipsum.",
      _id: 2,
      author: "who",
      img: "",
    },
  ];
  const user = {
    name: "Caro",
    img: "",
  };
  const loading = false;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {loading && <Loader />}
      {messages.toReversed().map((message) => (
        <div className="my-8" key={message._id}>
          <SinglePost user={user} message={message} />
        </div>
      ))}
    </div>
  );
};

export default Board;
