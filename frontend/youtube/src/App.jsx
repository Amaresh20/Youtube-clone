import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import ToggleSidebar from "./components/ToggleSidebar";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  function handleHamburger() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  const width = window.innerWidth;
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        console.log(window.innerWidth);
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    }

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Call the handler once to initialize state based on current width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header handleHamburger={handleHamburger} handleChange={handleChange} />
      {isSidebarOpen ? (
        <div className="flex mt-[100px]  ">
          <ToggleSidebar />
          <Outlet context={[inputValue]} />;
        </div>
      ) : (
        <div className="flex mt-[100px]">
          <Sidebar />
          <Outlet context={[inputValue]} />;
        </div>
      )}
    </>
  );
}
export default App;
