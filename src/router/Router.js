import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/register/login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/',element:<Home></Home>},
            {path:'/home',element:<Home></Home>},
            {path:'/login',element:<Login></Login>}
        ]
    }
])