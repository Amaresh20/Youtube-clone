import { categoryButton } from "../utils/categoryButton";
import { youtubeData } from "../utils/mockData";
function FilterButton(props) {
  function handleFilterButton(e) {
    let btnText = e.target.innerText;
    if (btnText.toLowerCase() === "all") {
      props.filterFunc(youtubeData);
      return;
    }
    const filterGenre = youtubeData.filter((data) => {
      return data.genre.toLowerCase() === btnText.toLowerCase();
    });
    props.filterFunc(filterGenre);
  }
  return (
    <div className=" flex justify-evenly items-center h-[60px] mb-[30px]">
      {categoryButton.map((button) => {
        return (
          <div
            key={button}
            className=" w-[100px] flex justify-center items-center py-2 bg-gray-300 text-[18px] rounded-md hover:bg-black hover:text-white"
          >
            <button onClick={handleFilterButton}>{button}</button>
          </div>
        );
      })}
    </div>
  );
}
export default FilterButton;
