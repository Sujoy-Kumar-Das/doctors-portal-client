import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AppoinmentSection from "../pages/Appoinment/Appoinment/AppoinmentSection";
import Login from "../pages/registration/login/Login";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/',element:<Home></Home>},
            {path:'/home',element:<Home></Home>},
            {path:'/login',element:<Login></Login>},
            {path:'/appoinment',element:<AppoinmentSection></AppoinmentSection>}
        ]
    }
])