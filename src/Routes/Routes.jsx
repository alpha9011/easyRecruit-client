import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AboutUs from "../Page/AboutUs/AboutUs";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Capabilities from "../Page/Capabilities/Capabilities";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Dashboard from "../DashboardLayout/Dashboard/Dashboard";
import DashboardHome from "../DashboardLayout/DashboardPage/DashboardHome/DashboardHome";
import Candidates from "../DashboardLayout/DashboardPage/Candidates/Candidates";
import MyJobs from "../DashboardLayout/DashboardPage/MyJobs/MyJobs";
import PostJob from "../DashboardLayout/DashboardPage/PostJob/PostJob";
import Circular from "../Page/Circular/Circular";
import ApplyForm from "../Page/Circular/ApplyForm/ApplyForm";




import Pricing from "../Page/Pricing/Pricing";
import WhyEasyRecruit from "../Page/WhyEasyRecruit/WhyEasyRecruit";
import CandidateForm from "../Page/Circular/ApplyForm/CandidateForm";
import UpdateJob from "../Page/Circular/UpdateJob";


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
                path: "/recruiting-software-capabilities",
                element: <Capabilities></Capabilities>
            },
            {
                path: "/circular",
                element: <Circular></Circular>
            },
            {
                path: "/jobdetails/:id",
                element: <ApplyForm></ApplyForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/postjob/${params.id}`)
            },
            {
                path: "/applyform/:id",
                element: <CandidateForm></CandidateForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/postjob/${params.id}`)
            },
            {
                path: "/updateJob/:id",
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/postjob/${params.id}`)
            },
            {
                path: "/price",
                element: <Pricing></Pricing>
            },
            {
                path: '/whyEasyRecruit',
                element: <WhyEasyRecruit></WhyEasyRecruit>
            }
        ]
    },
    {
        path: '/dashboard',
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