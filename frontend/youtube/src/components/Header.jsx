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
function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  function handleHamburger() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  function handleSearchClick() {
    setIsSearchOpen(true);
  }
  function closeSearchIcon() {
    setIsSearchOpen(false);
  }
  return (
    <>
      {isSearchOpen ? (
        <div>
          <div>
            <IoMdArrowBack onClick={closeSearchIcon} />
          </div>
          <div className="border-2 border-gray-400">
            <input type="text" />
          </div>
        </div>
      ) : (
        <>
          <div className="header flex justify-between items-center px-4 py-2 bg-white fixed top-0 z-40 w-[100%] h-16 ">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <RxHamburgerMenu
                onClick={handleHamburger}
                className="text-2xl cursor-pointer"
              />
              <div className="flex items-center space-x-1">
                <FaYoutube className="text-red-600 text-3xl" />
                <h1 className="text-xl font-bold text-gray-800">YouTube</h1>
              </div>
              <h5 className="text-xs font-medium text-gray-500 mb-4">IN</h5>
            </div>

            {/* Search Section */}
            <div className="search flex items-center flex-grow max-w-3xl">
              <input
                className="flex-grow h-10 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder="Search"
              />
              <button className="flex items-center justify-center h-10 w-16 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
                <CiSearch className="text-xl" />
              </button>
            </div>
            <div>
              <CiSearch
                className="search-btn text-xl hidden"
                onClick={handleSearchClick}
              />
            </div>
            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* <FaUserCircle className="text-3xl text-gray-600" /> */}
              <button className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                Sign In
              </button>
            </div>
          </div>
        </>
      )}
      {isSidebarOpen ? (
        <div className="flex pt-16">
          <ToggleSidebar />
          <Home />
        </div>
      ) : (
        <div className="flex pt-16">
          <Sidebar />
          <Home />
        </div>
      )}
    </>
  );
}

export default Header;
