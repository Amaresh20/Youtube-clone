import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { MdSwitchAccount } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Logout(props) {
  const username = localStorage.getItem("fullName");
  console.log("username", username);
  const userEmail = localStorage.getItem("email");
  const navigate = useNavigate();
  function handleLogout() {
    //removing token from localstroage
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    props.tokenFunc("");
    alert("logged out successfully !!");
    navigate("/");
  }
  return (
    <div>
      {props.token ? (
        <div
          id="drop-down"
          className="dropdown-menu  absolute  w-[24%] top-[53px] right-3 bg-slate-400 p-2 rounded-lg shadow-lg"
        >
          <div className="flex gap-4">
            <button className=" flex justify-center items-center  font-bold  rounded-full   hover:rounded-full hover:bg-[#212121] hover:border-[#fff] ">
              {" "}
              <span className=" text-2xl font-bold text-[#ff0000]">
                {username.charAt(0).toUpperCase()}
              </span>{" "}
            </button>
            <div>
              <h1>{username.slice(0, 1).toUpperCase() + username.slice(1)}</h1>
              <h1>{userEmail}</h1>
              <Link to="/channel-details">
                <h1 className="text-[#3d3aee] hover:text-[#ff0000] cursor-pointer font-medium">
                  View Your Channel
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex gap-2 items-center border-t-2 mt-3 pt-3">
            <FaGoogle />
            <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">
              Google Account
            </button>
          </div>
          <div className="flex gap-2 items-center border-t-2 mt-3 pt-3">
            <MdInventory />
            <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">
              Purchases and Membership
            </button>
          </div>

          <div className="flex gap-2 items-center border-t-2 mt-3 pt-3">
            <MdSwitchAccount />
            <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">
              Switch Account
            </button>
          </div>
          <div className="flex gap-2 items-center border-t-2 mt-3 pt-3">
            <IoIosLogOut />
            <button
              onClick={handleLogout}
              className="text-white p-1 w-full text-left hover:text-[#ff0000]"
            >
              Logout
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Logout;
