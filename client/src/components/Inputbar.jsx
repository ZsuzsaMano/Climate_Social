import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const InputBar = () => {
  const { comments, setComments } = useContext(DataContext);

  const handleOnChangeComment = (e) => {
    setComments(e.target.value);
  };

  const handlePostMsg = (e) => {
    e.preventDefault();
    console.log("sent");
  };

  return (
    <form className="w-full">
      <div className="flex flex-col items-center">
        <textarea
          name="message"
          id="message"
          value={comments}
          placeholder="Message"
          onChange={handleOnChangeComment}
          className="p-2 text-sm w-full md:w-2/3 outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
        ></textarea>
        <button
          onClick={handlePostMsg}
          className="w-full md:w-2/3 mt-4 bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase  py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default InputBar;
