import Navbars from "../../shared/Navbars/Navbars";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import PopularCategoriy from "./PopularCategoriy/PopularCategoriy";


const Home = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Banner />
            <Cards></Cards>
            <PopularCategoriy/>
        </div>
    );
};

export default Home;