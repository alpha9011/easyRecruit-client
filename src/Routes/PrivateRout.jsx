import { useContext } from "react";
import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Spinner } from "flowbite-react";




const PrivateRout = ({children}) => {

    const {user, loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader) {
        return <div className="h-screen flex justify-center items-center">
            <Spinner aria-label="Medium sized spinner example" size="md" />
        </div>
    }
    if(user) {
        return children
    }
    return <Navigate state={location.pathname} replace to = "/login"></Navigate>
};

PrivateRout.propTypes = {
    children: PropTypes.node
  };

export default PrivateRout;

