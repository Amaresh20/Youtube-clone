import { useState } from "react";
import { youtubeData } from "../utils/mockData";
import "./home.css";
function Home() {
  const [homeData, setHomeData] = useState(youtubeData);

  return (
    <div className="grid-container grid grid-cols-3 gap-4 mx-5">
      {homeData.map((data) => {
        return (
          <div key={data.id} className=" card h-[420px] hover:cursor-pointer">
            <img
              src={data.thumbnailUrl}
              alt=""
              srcset=""
              className=" thumbnail h-[300px] w-[100%] rounded-lg hover:rounded-none"
            />
            <p className=" card-title text-xl font-bold font-sans">
              {data.title}
            </p>
            <p className="card-info text-sm text-gray-600 font-sans">
              {data.uploader}
            </p>
            <p className="card-info text-sm text-gray-600 font-sans">
              {data.views}
            </p>
            <p className="card-info text-sm text-gray-600 font-sans">
              {data.uploadDate}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
