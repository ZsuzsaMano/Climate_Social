import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto md:p-4">
      <div className="border border-gray-700 my-6"></div>
      <p className=" w-full text-center sm:text-right">
        © {new Date().getFullYear()}
        <span className=""> Zsuzsa Lukacs</span>
      </p>
    </footer>
  );
};

export default Footer;
