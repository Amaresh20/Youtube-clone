import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white   w-full ">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <RxHamburgerMenu className="text-2xl cursor-pointer" />
        <div className="flex items-center space-x-1">
          <FaYoutube className="text-red-600 text-3xl" />
          <h1 className="text-xl font-bold text-gray-800">YouTube</h1>
        </div>
        <h5 className="text-xs font-medium text-gray-500 mb-4">IN</h5>
      </div>

      {/* Search Section */}
      <div className="flex items-center flex-grow max-w-3xl">
        <input
          className="flex-grow h-10 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          placeholder="Search"
        />
        <button className="flex items-center justify-center h-10 w-16 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
          <CiSearch className="text-xl" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-3xl text-gray-600" />
        <button className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
