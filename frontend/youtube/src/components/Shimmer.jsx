function Shimmer() {
  const itemArr = new Array(20).fill(0);
  console.log("itemArr", itemArr);
  return (
    <>
      <div className=" grid-container grid grid-cols-3 gap-4 mx-5 w-[900px]">
        {itemArr.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-200 rounded-lg h-[300px] w-[450px]"
            ></div>
          );
        })}
      </div>
    </>
  );
}
export default Shimmer;
