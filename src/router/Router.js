import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AppoinmentSection from "../pages/Appoinment/Appoinment/AppoinmentSection";
import Login from "../pages/registration/login/Login";
import Singup from "../pages/registration/singup/Singup";
import ResetPass from "../pages/registration/resetPass/ResetPass";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import PrivetRouer from "./PrivetRouer";
import AppoinmentDashBoard from "../pages/AppoinmentDasboard.js/AppoinmentDashBoard";
import AllUsers from "../pages/Alluser/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../pages/addDoctor/AddDoctor";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/',element:<Home></Home>},
            {path:'/home',element:<Home></Home>},
            {path:'/login',element:<Login></Login>},
            {path:'/singup',element:<Singup></Singup>},
            {path:"/reset-password",element:<ResetPass></ResetPass>},
            {path:'/appoinment',element:<AppoinmentSection></AppoinmentSection>}
        ]
    },
    {
        path:'/dashboardLayout',
        element:<PrivetRouer><DashBoardLayout></DashBoardLayout></PrivetRouer>,
        children:[
            {
                path:"/dashboardLayout",
                element:<AppoinmentDashBoard></AppoinmentDashBoard>
            },
            {
                path:"/dashboardLayout/allusers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"/dashboardLayout/add-doctor",
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            }
        ]
    }
])