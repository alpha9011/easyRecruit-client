import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { Spinner } from "flowbite-react";


const useAdmin = () => {
  const {user, loading} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
  const {data:isAdmin} = useQuery({
    queryKey: [ user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async ()=> {
      // console.log('askign or cheacking adming' , user);
     const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    //  console.log(res.data);
     if(loading){
        <Spinner aria-label="Default status example" />;
     }
     return res.data
    }
  })
  console.log(isAdmin === true);
  return [ isAdmin]
};

export default useAdmin;