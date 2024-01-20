import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export const DropdownMenu = ({ setIsDropdown }) => {
  const { setIsLoggedIn } = useContext(LoginContext);
  /** when clicking logout button remove token and change login state to false*/
  const onLogout = () => {
    localStorage.removeItem("token");
    setIsDropdown(false);
    setIsLoggedIn(false);
  };
  return (
    <div
      id="dropdown"
      className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700 absolute top-10 right-0"
    >
      <ul
        className="py-2  text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        {/* <li>
          <a
            href={{
              pathname: "/profile",
            }}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Profile
          </a>
        </li> */}

        <li
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={onLogout}
        >
          Sign out
        </li>
      </ul>
    </div>
  );
};
