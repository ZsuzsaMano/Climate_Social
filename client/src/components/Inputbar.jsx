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
    <div>
      <form action="" className="inputbar">
        <div className="message">
          <textarea
            name="message"
            id="message"
            value={comments}
            placeholder="Message"
            onChange={handleOnChangeComment}
          ></textarea>
          <button onClick={handlePostMsg}>SEND</button>
        </div>
      </form>
    </div>
  );
};

export default InputBar;
