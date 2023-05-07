import React, { useContext } from "react";
import NavBar from "../pages/shared/Navbar/NavBar";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/authContext/AuthContextProvider";
import useAdmin from "../hookes/useAdmin";
const DashBoardLayout = () => {
  const { user } = useContext(AuthProvider);
  const [isAdmin] = useAdmin(user?.email);
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
            {isAdmin && (
              <>
                <li>
                  <Link to={"/dashboardLayout/allusers"}>All users</Link>
                </li>
                <li>
                  <Link to={"/dashboardLayout/add-doctor"}>Add A Doctor</Link>
                </li>
                <li>
                  <Link to={"/dashboardLayout/store-doctors"}>All Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
