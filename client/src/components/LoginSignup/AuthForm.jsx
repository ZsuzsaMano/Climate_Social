import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

export const AuthForm = ({ setShowModal }) => {
  const {
    errorMessage,
    sendRegistration,
    registration,
    setRegistration,
    login,
    setLogin,
    sendLogin,
  } = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    isLogin
      ? setLogin((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      : setRegistration((prevState) => ({
          ...prevState,
          [name]: value,
        }));
  };

  return (
    <form
      onSubmit={isLogin ? sendLogin : sendRegistration}
      className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
    >
      {/*header*/}
      <div className="flex justify-between p-4 rounded-t">
        <h3>{isLogin ? "Login" : "Sign up"}</h3>
      </div>
      {/*body*/}
      <div className="flex flex-col p-6 gap-4">
        {!isLogin && (
          <input
            className="p-2 text-sm w-full outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
            type="text"
            placeholder="name"
            name="name"
            value={registration.name}
            onChange={handleChange}
            required={!isLogin}
          />
        )}
        <input
          className="p-2 text-sm w-full outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
          name="email"
          type="email"
          placeholder="email"
          value={isLogin ? login.email : registration.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 text-sm w-full outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
          name="password"
          type="password"
          placeholder="password"
          value={isLogin ? login.password : registration.password}
          onChange={handleChange}
          required
          minLength={6}
        />
        <p className="text-red text-xs">{errorMessage}</p>
        <button
          className="text-blue-500 md:text-xs text-left"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          type="button"
        >
          {isLogin ? "No account yet? Sign up!" : "Already registered? Login!"}
        </button>
      </div>

      {/*footer*/}
      <div className="flex items-center justify-end">
        <button
          className="text-red-500 uppercase px-6 py-2 mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-600 text-white active:bg-emerald-600 font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          {isLogin ? "Login" : "Sign up"}
        </button>
      </div>
    </form>
  );
};
