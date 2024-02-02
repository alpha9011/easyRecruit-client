import { Card } from "flowbite-react";
import PropTypes from "prop-types"

const MyJobCard = ({myjob}) => {
    console.log(myjob);
    const  {logo, title ,jobType, companyName    } = myjob || {}
    return (
        <div>
            <Card >
        <img src={logo} alt="company logo" className="h-40" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {title}
      </h5>
      <h2> {companyName}</h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {jobType
}
      </p>
    </Card>
        </div>
    );
};


MyJobCard.propTypes = {
    myjob: PropTypes.object
}
export default MyJobCard;