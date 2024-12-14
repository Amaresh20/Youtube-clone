import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
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
  return (
    <>
      <Header handleHamburger={handleHamburger} handleChange={handleChange} />
      {isSidebarOpen ? (
        <div className="flex pt-16">
          <ToggleSidebar />
          <Outlet context={[inputValue]} />;
        </div>
      ) : (
        <div className="flex pt-16">
          <Sidebar />
          <Outlet context={[inputValue]} />;
        </div>
      )}
    </>
  );
}
export default App;
