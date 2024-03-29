import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AboutUs from "../Page/AboutUs/AboutUs";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Capabilities from "../Page/Capabilities/Capabilities";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Dashboard from "../DashboardLayout/Dashboard/Dashboard";
import DashboardHome from "../DashboardLayout/DashboardPage/DashboardUserHome/DashboardHome";
import Candidates from "../DashboardLayout/DashboardPage/Candidates/Candidates";
import MyJobs from "../DashboardLayout/DashboardPage/MyJobs/MyJobs";
import PostJob from "../DashboardLayout/DashboardPage/PostJob/PostJob";
import Circular from "../Page/Circular/Circular";
import InterViewSchedule from "../DashboardLayout/DashboardPage/InterViewSchedule/InterViewSchedule";
import ApplyForm from "../Page/Circular/ApplyForm/JobDetails";
import Pricing from "../Page/Pricing/Pricing";
import WhyEasyRecruit from "../Page/WhyEasyRecruit/WhyEasyRecruit";
import CandidateForm from "../Page/Circular/ApplyForm/CandidateForm";
import TermsAndConditions from "../shared/Footer/TermsAndConditions";
import PrivacyPolicy from "../shared/Footer/PrivacyPolicy";
import UpdateJob from "../Page/Circular/UpdateJob";
import MemberShip from "../Page/Membership/Membership";
import CustomerProfile from "../DashboardLayout/DashboardPage/CustomerProfile/CustomerProfile";
import AllUsers from "../DashboardLayout/DashboardAdminPage/AllUsers/AllUsers";
import AllJobs from "../DashboardLayout/DashboardAdminPage/AllJobs/AllJobs";
import ContactUs from "../Page/ContactUs/ContactUs";
import PrivateRout from "./PrivateRout";
import CVmanage from "../DashboardLayout/DashboardPage/CVmanage/CVmanage";
import AllJobsCandidates from "../DashboardLayout/DashboardAdminPage/AllJobs/AllJobsCandidates";
import MyCandidates from "../DashboardLayout/DashboardPage/MyJobs/MyCandidates";
import ShortListed from "../DashboardLayout/DashboardPage/Appointment/ShortListed";
import Appointment from "../DashboardLayout/DashboardPage/Appointment/Appointment";
import DemoPage from "../Page/DemoPage/DemoPage";
import PackDetiles from "../Page/Pricing/PackDetiles";
import PaymentSuccess from "../Page/Pricing/PaymentSuccess";
import PaymentFail from "../Page/Pricing/PaymentFail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/recruiting-software-capabilities",
        element: <Capabilities></Capabilities>,
      },
      {
        path: "/circular",
        element: <Circular></Circular>,
      },
      {
        path: "/jobdetails/:id",
        element: <ApplyForm></ApplyForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/postjob/${params.id}`),
      },
      {
        path: "/packdetails/:id",
        element: <PackDetiles></PackDetiles>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packs/${params.id}`),
      },
      {
        path: "/applyform/:id",
        element: <CandidateForm></CandidateForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/postjob/${params.id}`),
      },

      {
        path: "/price",
        element: <Pricing></Pricing>,
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFail></PaymentFail>,
      },
      {
        path: "/whyEasyRecruit",
        element: <WhyEasyRecruit></WhyEasyRecruit>,
      },
      {
        path: "/membership",
        element: <MemberShip></MemberShip>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/demoPage",
        element: <DemoPage></DemoPage>
      },

    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRout>
        <Dashboard></Dashboard>
      </PrivateRout>
    ),
    children: [
      // Admin User routs
      {
        path: "allUser",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "alljobs/:id",
        element: <AllJobsCandidates></AllJobsCandidates>,
        loader: ({ params }) => fetch(`http://localhost:5000/postjob/${params.id}`),
      },
      {
        path: "shortlisted/:id",
        element: <ShortListed></ShortListed>,
        loader: ({ params }) => fetch(`http://localhost:5000/postjob/${params.id}`),
      },

      // Normal user routs
      {
        path: "customerProfile",
        element: <CustomerProfile></CustomerProfile>,
      },
      {
        path: "dashboardHome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "candidates",
        element: <Candidates></Candidates>,
      },
      {
        path: "myjobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "myCandidate/:id",
        element: <MyCandidates></MyCandidates>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/postjob/${params.id}`),
      },
      {
        path: "updateJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/postjob/${params.id}`),
      },
      {
        path: "postjob",
        element: <PostJob></PostJob>,
      },
      {
        path: "interviewSchedule",
        element: <InterViewSchedule></InterViewSchedule>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "CVmanage/:id",
        element: <CVmanage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/applicantCV/${params.id}`),
      },
    ],
  },
]);
