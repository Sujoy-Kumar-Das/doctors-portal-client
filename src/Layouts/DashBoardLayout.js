import React from "react";
import NavBar from "../pages/shared/Navbar/NavBar";
import { Link, Outlet } from "react-router-dom";
const DashBoardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to={"/dashboardLayout"}>My Appointment</Link>
            </li>
            <li>
              <Link to={"/dashboardLayout/allusers"}>All users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
