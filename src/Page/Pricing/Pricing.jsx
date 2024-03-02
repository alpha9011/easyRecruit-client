import PageCover from "../../shared/PageCover/PageCover";
import PricingFAQ from "./PricingFAQ";
// import bgImg from "../../../src/assets/priceBackgound1.jpg"
import { Helmet } from "react-helmet-async";
import AllPrices from "./AllPrices";

const Pricing = () => {
    return (
        <div className="font-roboto">
            <Helmet>
                <title>EasyRecruit || Pricing</title>
            </Helmet>
            <PageCover img={"https://i.ibb.co/PWd6nV7/price-Backgound1.jpg"} title={'Transparent plans to suit your needs'} desc={'If your hiring is more complex, reach out today to discuss custom plans for franchise/multi-location groups, RBO, staffing firms, high-volume hiring organizations, and more.'}></PageCover>
            <AllPrices></AllPrices>
            <PricingFAQ></PricingFAQ>
        </div>
    );
};

export default Pricing;