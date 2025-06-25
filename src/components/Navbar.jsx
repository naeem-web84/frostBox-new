import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSnowflake } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import md5 from "md5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("LogOut successful!"))
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const getAvatar = (user) => {
    if (user?.photoURL) return user.photoURL;
    const hash = md5(user.email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-600 via-blue-700 to-violet-700 shadow-lg p-4">
      <div className="flex justify-between items-center px-4 md:px-12 lg:max-w-screen-2xl lg:mx-auto w-full">
        {/* Logo and Avatar */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] tracking-wide"
          >
            <FaSnowflake className="text-white drop-shadow-lg animate-spin-slow" />
            FrostBox
          </Link>

          {user && (
            <div className="flex items-center ml-2 gap-2 text-white">
              <img
                src={getAvatar(user)}
                alt="Profile"
                className="w-7 h-7 rounded-full border border-white shadow"
                title={user.displayName || user.email}
              />
              <span className="text-sm hidden sm:inline-block">{user.email}</span>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`relative text-white hover:text-yellow-300 transition-all duration-200 ${
              isActive("/") ? "text-yellow-300 font-semibold before:scale-x-100" : ""
            } before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-yellow-300 before:transition-transform before:duration-200 before:scale-x-0 hover:before:scale-x-100`}
          >
            Home
          </Link>

          <Link
            to="/profile"
            className={`relative text-white hover:text-green-300 transition-all duration-200 ${
              isActive("/profile") ? "text-green-300 font-semibold before:scale-x-100" : ""
            } before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-green-300 before:transition-transform before:duration-200 before:scale-x-0 hover:before:scale-x-100`}
          >
            My Profile
          </Link>

          {user && (
            <Link
              to="/my-orders"
              className={`relative text-white hover:text-pink-300 transition-all duration-200 ${
                isActive("/my-orders") ? "text-pink-300 font-semibold before:scale-x-100" : ""
              } before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-pink-300 before:transition-transform before:duration-200 before:scale-x-0 hover:before:scale-x-100`}
            >
              My Orders
            </Link>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="relative bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="relative bg-teal-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-400"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-blue-700 py-4 rounded-md">
          <Link
            to="/"
            className={`relative text-white hover:text-yellow-300 transition-all duration-200 ${
              isActive("/") ? "text-yellow-300 font-semibold before:scale-x-100" : ""
            } before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-yellow-300 before:transition-transform before:duration-200 before:scale-x-0 hover:before:scale-x-100`}
            onClick={toggleMenu}
          >
            Home
          </Link>

          <Link
            to="/profile"
            className={`relative text-white hover:text-green-300 transition-all duration-200 ${
              isActive("/profile") ? "text-green-300 font-semibold before:scale-x-100" : ""
            } before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-green-300 before:transition-transform before:duration-200 before:scale-x-0 hover:before:scale-x-100`}
            onClick={toggleMenu}
          >
            My Profile
          </Link>

          {user && (
            <Link
              to="/my-orders"
              className={`relative text-white hover:text-pink-300 transition-all duration-200 ${
                isActive("/my-orders") ? "text-pink-300 font-semibold before:scale-x-100" : ""
              } before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-pink-300 before:transition-transform before:duration-200 before:scale-x-0 hover:before:scale-x-100`}
              onClick={toggleMenu}
            >
              My Orders
            </Link>
          )}

          {user ? (
            <button
              onClick={() => {
                logOut();
                toggleMenu();
              }}
              className="relative bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="relative bg-teal-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-400"
              onClick={toggleMenu}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
