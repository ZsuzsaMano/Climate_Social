import React from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CgProfile } from "react-icons/cg";

const SinglePost = ({ message, user }) => {
  dayjs.extend(relativeTime);
  const date = new Date();
  const d = dayjs(date).toNow();
  return (
    <div className="container bg-white rounded-xl shadow-lg w-full">
      <div className="flex p-4 justify-between items-center">
        <div className="flex items-center space-x-2">
          {user.img ? (
            <img className="w-10 rounded-full" src={user.img} alt="author" />
          ) : (
            <CgProfile size={28} />
          )}
          <h2 className="text-gray-800 font-bold cursor-pointer">
            {user.name}
          </h2>
        </div>
        <p className="">{d}</p>
      </div>
      <div className="border border-gray-300 "></div>
      <div className="flex flex-wrap-reverse md:flex-nowrap">
        {message.img && (
          <img className="w-full h-full" src={message.img} alt="post" />
        )}
        <p className="py-8 px-4 md:px-16">{message.text}</p>
      </div>
      <div className="flex p-4 justify-between">
        <div className="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>20</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
