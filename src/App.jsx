import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Sidebar } from "components";
import {Basic, Clients, Dashboard, Employees, Profile, Settings } from "pages";
import "assets/styles/index.scss";

function App() {
  const [parametr, setParametr] = useState({open: false, data:{}})
  return (
    <div>
      <div className="flex">
        <div className="w-[17%] h-[690px] bg-[#F1F3F5]">
          <Sidebar />
        </div>
        <div className="pages-wrapper w-[83%]">
          <div className="header-wrapper">
            <Header />
            <div className="main-wrapper">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings/" element={<Settings />} />
              </Routes>
            </div>
            <Basic {...{parametr, setParametr} } 
            className={parametr.open ? "main-section__wrapper" : "open"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
