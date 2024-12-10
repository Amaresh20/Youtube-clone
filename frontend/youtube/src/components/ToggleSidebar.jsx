import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
function ToggleSidebar() {
  return (
    <div className="flex flex-col  w-20">
      <div className=" mb-4  flex flex-col items-center w-[60px]">
        <IoMdHome className="text-xl" />
        <h1 className="font-bold">Home</h1>
      </div>
      <div className=" mb-4  flex flex-col items-center w-[60px]">
        <SiYoutubeshorts className="text-xl" />
        <h1 className="font-bold">Shorts</h1>
      </div>

      <div className="  mb-4  flex flex-col items-center w-[60px]">
        <FaUserCircle className="text-xl" />
        <h1 className="font-bold">You</h1>
      </div>
    </div>
  );
}
export default ToggleSidebar;
