import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { youtubeData } from "../utils/mockData";
import "./home.css";
import FilterButton from "./FilterButton";
function Home() {
  const [inputValue] = useOutletContext();
  const [homeData, setHomeData] = useState(youtubeData);
  useEffect(() => {
    if (inputValue) {
      let filteredInputData = youtubeData.filter((data) => {
        return data.title.toLowerCase().includes(inputValue.toLowerCase());
      });
      setHomeData(filteredInputData);
    } else {
      setHomeData(youtubeData);
    }
  }, [inputValue]);
  return (
    <>
      <div className="flex flex-col">
        <FilterButton filterFunc={setHomeData} />
        <div className="grid-container grid grid-cols-3 gap-4 mx-5">
          {homeData.map((data) => {
            return (
              <div
                key={data.videoId}
                className=" card h-[420px] hover:cursor-pointer"
              >
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
                  {data.views} views
                </p>
                <p className="card-info text-sm text-gray-600 font-sans">
                  {data.uploadDate}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
