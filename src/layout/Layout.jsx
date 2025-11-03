import React, { useEffect, useState } from "react";
import Sidebar from "../components/left/Sidebar";
import Navbar from "../components/right/Navbar";
import { Outlet } from "react-router-dom";
import Profile from "../components/right/Profile/Profile";

const Layout = () => {
   const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => setShowProfile(!showProfile);
   
  const [listShow, setListShow] = useState(false);
  const toggleShow = () => setListShow(!listShow);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setListShow(false);
      } else {
        setListShow(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  
  return (
    <div className="flex relative h-screen overflow-hidden">
      {/* Left Sidebar */}
      <aside className="min-w-[30%] absolute top-9 lg:top-0 lg:left-0 animate-slide-in lg:relative bg-white border-r border-gray-200">
        {listShow &&
        <Sidebar />
        }
      </aside>

      {/* Right Section */}
      <div className="flex-1 lg:h-full flex flex-col bg-gray-50">
        {/* Navbar (only on right side) */}
        <header className="h-10 border-b border-gray-200 shadow-sm bg-white sticky top-0 z-10">
          <Navbar onUserClick={toggleProfile} listClick={toggleShow} listShow={listShow} showProfile={showProfile} />
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto sm:p-6">
          <Outlet />
        </main>
      </div>
      {showProfile && (
        <div className="absolute right-0 top-10 w-1/2  lg:w-1/6 animate-slide-in">
          <Profile />
        </div>
      )}
    </div>
  );
};

export default Layout;
