import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CeritaKu</h1>
        <nav>
          <Link to="/" className="mx-2 hover:underline">
            Home
          </Link>
          <Link to="/admin" className="mx-2 hover:underline">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
