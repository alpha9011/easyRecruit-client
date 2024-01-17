import Navbars from "../../shared/Navbars/Navbars";
import SocialIcon from "../../shared/SocialIcon/SocialIcon";
import Banner from "./Banner/Banner";
import LatestJobs from "./LatestJob/LatestJobs";
import Reviews from "./Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Banner />
            <SocialIcon></SocialIcon>
            <Reviews></Reviews>
            <LatestJobs></LatestJobs>
        </div>
    );
};

export default Home;