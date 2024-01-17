import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";


export const router = createBrowserRouter([
   {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/login",
            element:<Login/>
        },
        {
            path: "/register",
            element:<Register/>
        },
    ]
   }
]) 