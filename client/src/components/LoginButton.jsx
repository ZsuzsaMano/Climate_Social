import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { CgProfile } from "react-icons/cg";

const LoginButton = ({ setShowModal }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div>
      <button
        className="ml-12 shadow-[3.0px_3.0px_3.0px_rgba(0,0,0,0.18)] rounded-md px-4"
        onClick={
          isLoggedIn
            ? () => setIsDropdown(!isDropdown)
            : () => setShowModal(true)
        }
      >
        {isLoggedIn ? <CgProfile size={28} /> : "Login"}
      </button>
    </div>
  );
};

export default LoginButton;
