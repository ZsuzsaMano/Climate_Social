import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { config } from "../config";

const InputBar = () => {
  const { user } = useContext(LoginContext);
  const [postComment, setPostComment] = useState("");
  const { getComments } = useContext(DataContext);

  const addComment = (e) => {
    e.preventDefault();
    axios
      .post(
        `${config.serverURL}/api/comments`,
        JSON.stringify({
          comment: postComment,
          userId: user._id,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => getComments())
      .catch((err) => console.log(err.message));
    setPostComment("");
  };
  return (
    <form className="w-full">
      <div className="flex flex-col items-center">
        <textarea
          value={postComment}
          onChange={(e) => setPostComment(e.target.value)}
          name="comment"
          id=""
          rows="2"
          placeholder="your comment"
          className="p-2 text-sm w-full md:w-2/3 outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
        ></textarea>
        <button
          onClick={addComment}
          className="w-full md:w-2/3 mt-4 bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase  py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default InputBar;
