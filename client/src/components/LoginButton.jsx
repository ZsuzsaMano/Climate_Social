import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { CgProfile } from "react-icons/cg";
import { DropdownMenu } from "./DropdownMenu";

const LoginButton = ({ setShowModal }) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        className="ml-12 shadow-[3.0px_3.0px_3.0px_rgba(0,0,0,0.18)] rounded-md px-4"
        onClick={
          isLoggedIn
            ? () => setIsDropdown(!isDropdown)
            : () => setShowModal(true)
        }
      >
        {isLoggedIn ? <CgProfile size={40} /> : "Login"}
      </button>
      {isDropdown && isLoggedIn && (
        <DropdownMenu setIsDropdown={setIsDropdown} />
      )}
    </div>
  );
};

export default LoginButton;
