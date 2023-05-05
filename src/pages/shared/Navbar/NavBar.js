import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../contexts/authContext/AuthContextProvider";

const NavBar = () => {
  const {user,logOut} = useContext(AuthProvider);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  const menuItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to={"/appoinment"}>Appointment</Link>
      </li>
      <li>
        <Link>Reviews</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      
      {
        user && user.uid ? <li>
        <button onClick={handleLogOut} className=" btn btn-secondary text-white">Logout</button>
      </li>:<li>
        <Link to={"/login"}>Login</Link>
      </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={2}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          Doctor's Potal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    
      <label htmlFor="my-drawer-2" tabIndex={1} className="btn btn-ghost lg:hidden navbar-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default NavBar;
