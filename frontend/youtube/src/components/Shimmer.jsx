function Shimmer() {
  const itemArr = new Array(20).fill(0);
  console.log("itemArr", itemArr);
  return (
    <>
      <div className="grid-container grid grid-cols-3 gap-4 mx-5 bg-green-300">
        {itemArr.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 border-red-200 h-[300px]"
            ></div>
          );
        })}
      </div>
    </>
  );
}
export default Shimmer;
