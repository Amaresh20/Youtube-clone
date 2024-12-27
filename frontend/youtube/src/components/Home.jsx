import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { youtubeData } from "../utils/mockData";
import "./home.css";
import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function Home() {
  const [inputValue] = useOutletContext();
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    fetch("https://youtube-clone-1-nt3e.onrender.com/youtube/data")
      .then((response) => response.json())
      .then((data) => setHomeData(data));
  }, []);

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
        <div className="filter-btn">
          <FilterButton filterFunc={setHomeData} />
        </div>
        {homeData.length > 0 ? (
          <div className="grid-container grid grid-cols-3 gap-4 mx-5">
            {homeData.map((data, index) => {
              return (
                <Link to={`/view_video/${data._id}`} key={data._id}>
                  <div className="card  hover:cursor-pointer">
                    <img
                      src={data.thumbnailUrl}
                      alt=""
                      className="thumbnail  w-[100%] rounded-lg hover:rounded-none"
                    />
                    <p className="card-title text-xl font-bold font-sans">
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
                </Link>
              );
            })}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
}

export default Home;
