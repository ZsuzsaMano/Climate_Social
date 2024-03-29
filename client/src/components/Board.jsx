import React, { useContext, useState } from "react";
import SinglePost from "./SinglePost";
import Inputbar from "./Inputbar";
import LoginButton from "./LoginSignup/LoginButton";
import { AuthModal } from "./LoginSignup/AuthModal";
import { LoginContext } from "../context/LoginContext";
import { DataContext } from "../context/DataContext";

const Board = () => {
  const [isShowModal, setShowModal] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);
  const { comments } = useContext(DataContext);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="text-right">
        <LoginButton setShowModal={setShowModal} />
      </div>
      {isLoggedIn && <Inputbar />}
      {isShowModal && !isLoggedIn && <AuthModal setShowModal={setShowModal} />}
      {comments.toReversed().map((message) => (
        <div className="my-4" key={message._id}>
          <SinglePost message={message} />
        </div>
      ))}
    </div>
  );
};

export default Board;
