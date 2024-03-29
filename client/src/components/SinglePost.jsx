import React, { useContext } from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CgProfile } from "react-icons/cg";
import { DataContext } from "../context/DataContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LoginContext } from "../context/LoginContext";

const SinglePost = ({ message }) => {
  const { updateComment, deleteComment } = useContext(DataContext);
  const { user, isLoggedIn } = useContext(LoginContext);

  dayjs.extend(relativeTime);
  const date = message.createdAt;
  const d = dayjs(date).fromNow();

  const like = message.likeCount + 1;
  const isUserPost = message.userName === user.name && isLoggedIn;

  return (
    <div className="container bg-white rounded-xl shadow-lg w-full mx-auto">
      <div className="flex p-4 justify-between items-center bg-blue-100 rounded-t-md">
        <div className="flex items-center space-x-2">
          <CgProfile size={28} />
          <h2 className="text-gray-800 font-bold cursor-pointer">
            {message.userName}
          </h2>
        </div>
        <p className="">{d}</p>
      </div>
      <div className="flex flex-wrap-reverse md:flex-nowrap">
        {message.img && (
          <img
            className="w-full h-full md:w-1/3"
            src={message.img}
            alt="post"
          />
        )}
        <p className="py-8 px-4 md:px-16">{message.comment}</p>
      </div>
      <div className="border border-gray-300 "></div>
      <div className="flex p-4 justify-between">
        <div
          className="flex space-x-1 items-center"
          onClick={isLoggedIn ? () => updateComment(message._id, like) : null}
        >
          <span className="cursor-pointer hover:scale-125 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>{message.likeCount}</span>
        </div>
        {isUserPost && (
          <span
            className="cursor-pointer hover:scale-125"
            onClick={() => deleteComment(message._id)}
          >
            <FaRegTrashAlt />
          </span>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
