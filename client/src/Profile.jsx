import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";

const Profile = () => {
  const { user } = useContext(LoginContext);
  return (
    <main className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl my-8">{user.name}</h2>
      <span className="text-blue-600 mr-4 font-semibold leading-6">Email:</span>
      {user?.email}
      <div className="border border-gray-300 my-6 md:my-3"></div>
    </main>
  );
};

export default Profile;
