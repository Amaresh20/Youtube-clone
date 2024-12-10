import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { MdMovie } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio, SiYoutubemusic, SiYoutubekids } from "react-icons/si";
import { CiSettings, CiFlag1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

function Sidebar() {
  return (
    <div className=" sidebar w-60 h-100 bg-white p-4">
      {/* Home Section */}
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <IoMdHome className="text-xl" />
        <h1 className="text-base font-medium">Home</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <SiYoutubeshorts className="text-xl" />
        <h1 className="text-base font-medium">Shorts</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <MdOutlineSubscriptions className="text-xl" />
        <h1 className="text-base font-medium">Subscriptions</h1>
      </div>
      <hr className="my-4" />

      {/* Library Section */}
      <div className="flex items-center space-x-2">
        <h1 className="font-bold text-xl">You</h1>
        <FaAngleRight />
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <GoHistory className="text-xl" />
        <h1 className="text-base font-medium">History</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <MdOutlinePlaylistPlay className="text-xl" />
        <h1 className="text-base font-medium">Playlists</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <GoVideo className="text-xl" />
        <h1 className="text-base font-medium">Your Videos</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <MdOutlineWatchLater className="text-xl" />
        <h1 className="text-base font-medium">Watch Later</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <AiOutlineLike className="text-xl" />
        <h1 className="text-base font-medium">Liked Videos</h1>
      </div>
      <hr className="my-4" />

      {/* Explore Section */}
      <h1 className="text-xl font-bold  mb-2">Explore</h1>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <RiShoppingBag4Line className="text-xl" />
        <h1 className="text-base font-medium">Shopping</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <HiOutlineMusicNote className="text-xl" />
        <h1 className="text-base font-medium">Music</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <MdMovie className="text-xl" />
        <h1 className="text-base font-medium">Movies</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <SiYoutubegaming className="text-xl" />
        <h1 className="text-base font-medium">Gaming</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <MdNewspaper className="text-xl" />
        <h1 className="text-base font-medium">News</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <TfiCup className="text-xl" />
        <h1 className="text-base font-medium">Sports</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <AiOutlineBulb className="text-xl" />
        <h1 className="text-base font-medium">Courses</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <GiHanger className="text-xl" />
        <h1 className="text-base font-medium">Fashion & Beauty</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <MdOutlinePodcasts className="text-xl" />
        <h1 className="text-base font-medium">Podcasts</h1>
      </div>
      <hr className="my-4" />

      {/* More from YouTube Section */}
      <h1 className="text-xl font-bold  mb-2">More from YouTube</h1>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <FaYoutube className="text-xl text-red-600" />
        <h1 className="text-base font-medium">YouTube Premium</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <SiYoutubestudio className="text-xl" />
        <h1 className="text-base font-medium">YouTube Studio</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <SiYoutubemusic className="text-xl text-blue-600" />
        <h1 className="text-base font-medium">YouTube Music</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <SiYoutubekids className="text-xl text-green-600" />
        <h1 className="text-base font-medium">YouTube Kids</h1>
      </div>
      <hr className="my-4" />

      {/* Settings Section */}
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <CiSettings className="text-xl" />
        <h1 className="text-base font-medium">Settings</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <CiFlag1 className="text-xl" />
        <h1 className="text-base font-medium">Report History</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <IoMdHelpCircleOutline className="text-xl" />
        <h1 className="text-base font-medium">Help</h1>
      </div>
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer rounded">
        <MdOutlineFeedback className="text-xl" />
        <h1 className="text-base font-medium">Send Feedback</h1>
      </div>
    </div>
  );
}

export default Sidebar;
