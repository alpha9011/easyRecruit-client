/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Spinner } from "flowbite-react";


const AdminRout = ({children}) => {
    const [isAdmin, isPendingLoading] = useAdmin()
    const {user,  loader} = useContext(AuthContext)
    const location = useLocation()


    if(loader || isPendingLoading) {
        return <div className="h-screen flex justify-center items-center">
             <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }
    // if( !isAdmin) {
    //     return <div className="h-screen flex justify-center items-center">
    //        <Spinner aria-label="Extra large spinner example" size="xl" />
    //     </div>
    // }
    if(user && isAdmin){
        return children
    }

    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRout;