import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AboutUs from "../Page/AboutUs/AboutUs";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Dashboard from "../DashboardLayout/Dashboard/Dashboard";
import DashboardHome from "../DashboardLayout/DashboardPage/DashboardHome/DashboardHome";
import Candidates from "../DashboardLayout/DashboardPage/Candidates/Candidates";
import MyJobs from "../DashboardLayout/DashboardPage/MyJobs/MyJobs";
import PostJob from "../DashboardLayout/DashboardPage/PostJob/PostJob";
import ApplyForm from "../DashboardLayout/ApplyForm/ApplyForm";




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
                path: "/blog",
                element: <ApplyForm></ApplyForm>
            },
          

        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboardHome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'candidates',
                element: <Candidates></Candidates>
            },
            {
                path: 'myjobs',
                element: <MyJobs></MyJobs>
            },
            {
                path: 'postjob',
                element: <PostJob></PostJob>
            },

        ]

    }
]) 