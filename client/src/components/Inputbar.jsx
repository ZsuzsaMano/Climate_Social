import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { DataContext } from "../context/DataContext";
import { BiSolidCloudUpload } from "react-icons/bi";
import axios from "axios";
import { config } from "../config";

const InputBar = () => {
  const { user } = useContext(LoginContext);
  const { getComments } = useContext(DataContext);

  const [postComment, setPostComment] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const image = await imagebase64(file);
    setImage(image);
  };

  const imagebase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const data = new Promise((res, rej) => {
      reader.onload = () => res(reader.result);
      reader.onerror = (err) => rej(err);
    });
    return data;
  };

  const addComment = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    axios
      .post(
        `${config.serverURL}/api/comments`,
        JSON.stringify({
          comment: postComment,
          userId: user._id,
          userName: user.name,
          img: image,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => getComments())
      .catch((err) => console.log(err.message));
    setPostComment("");
    setImage("");
  };
  return (
    <form className="w-full mt-4 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad] p-2 ">
      <div className="flex flex-col items-center">
        <div className="flex gap-8 w-full md:w-2/3">
          <label
            htmlFor="uploadImage"
            className="w-40 h-20 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad] flex justify-center items-center"
          >
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="uploadImage"
            />
            {image ? (
              <img
                src={image}
                alt="uploaded"
                className="rounded-md object-contain w-40 h-20"
              />
            ) : (
              <BiSolidCloudUpload size={50} />
            )}
          </label>
          <textarea
            value={postComment}
            onChange={(e) => setPostComment(e.target.value)}
            name="comment"
            id=""
            rows="2"
            required
            placeholder="your comment"
            className="p-2 text-sm w-full outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
          ></textarea>
        </div>
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
