import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://easy-recruit-server.vercel.app',

    
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;