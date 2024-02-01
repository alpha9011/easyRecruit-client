import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AboutUs from "../Page/AboutUs/AboutUs";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Payment from "../Page/Payment/Payment";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/payment",
                element: <Payment/>
            }
        ]
    }
]) 