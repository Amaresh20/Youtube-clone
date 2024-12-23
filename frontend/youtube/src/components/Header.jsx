import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";
import ToggleSidebar from "./ToggleSidebar";
import Home from "./Home";
import "./header.css";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Header({ handleHamburger, handleChange }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const username = localStorage.getItem("fullName");
  console.log("username", username);
  console.log("token", token);
  function handleSearchClick() {
    setIsSearchOpen(true);
  }
  function closeSearchIcon() {
    setIsSearchOpen(false);
  }
  //for dropdown
  function handleDropDown() {
    setDropDown(!dropdown);
  }
  return (
    <>
      {isSearchOpen ? (
        <div className="input-search flex justify-center items-center space-x-4 w-full p-4 bg-white shadow-md fixed top-0 z-50">
          <IoMdArrowBack
            className="text-xl cursor-pointer"
            onClick={closeSearchIcon}
          />
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="border-2 border-gray-300 w-[70%] sm:w-[60%] md:w-[50%] rounded-xl p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ) : (
        <div className="header flex justify-between items-center px-4 py-2 bg-white shadow-md fixed top-0 z-50 w-full h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="hamburger">
              <RxHamburgerMenu
                onClick={handleHamburger}
                className=" text-2xl cursor-pointer text-gray-600 hover:text-gray-800"
              />
            </div>
            <div className="flex items-center space-x-1">
              <FaYoutube className="text-red-600 text-3xl" />
              <h1 className="text-xl font-bold text-gray-800">YouTube</h1>
            </div>
            <h5 className="hidden sm:block text-xs font-medium text-gray-500 mb-4">
              IN
            </h5>
          </div>

          {/* Search Section */}
          <div className="hidden sm:flex items-center flex-grow max-w-3xl">
            <input
              className="flex-grow h-10 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
            <button className="flex items-center justify-center h-10 w-16 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
              <CiSearch className="text-xl" />
            </button>
          </div>
          <div className="sm:hidden">
            {/* Search Icon for Mobile */}
            <CiSearch
              className="search-btn text-xl text-gray-600 hover:text-gray-800"
              onClick={handleSearchClick}
            />
          </div>

          {/* Right Section */}
          {token ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleDropDown}
                className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                {username.slice(0, 1).toUpperCase()}
              </button>
              {dropdown ? <Logout token={token} tokenFunc={setToken} /> : null}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/signup">
                <button className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
