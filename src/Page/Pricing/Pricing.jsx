import PageCover from "../../shared/PageCover/PageCover";
import PriceCard from "./PriceCard";
import PricingFAQ from "./PricingFAQ";
import bgImg from "../../../src/assets/priceBackgound1.jpg"
import { Helmet } from "react-helmet-async";

const Pricing = () => {
    return (
        <div>
            <Helmet>
                <title>EasyRecruit || Pricing</title>
            </Helmet>
            <PageCover img={bgImg} title={'Transparent plans to suit your needs'} desc={'If your hiring is more complex, reach out today to discuss custom plans for franchise/multi-location groups, RBO, staffing firms, high-volume hiring organizations, and more.'}></PageCover>
            <PriceCard></PriceCard>
            <PricingFAQ></PricingFAQ>
        </div>
    );
};

export default Pricing;