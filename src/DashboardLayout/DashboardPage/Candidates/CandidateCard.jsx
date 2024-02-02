import { Avatar, Button, Card, Dropdown, Rating } from "flowbite-react";
import Swal from "sweetalert2";
import { ImBin } from "react-icons/im";
import PropTypes  from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
const CandidateCard = ({candidate,candidates,setCandidate}) => {
    console.log(candidate);
    const { name, address, salary, phone, email, resume, coverLetter, _id, photo, language } = candidate|| {};
    console.log(name);
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/applicantCV/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This candidate has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
            const remaining = candidates.filter( candidate => candidate._id !== _id)
            setCandidate(remaining)
        });
    }
    return (
        <div className="flex justify-center border">
            <Card className="max-w-xs border transition-transform hover:border-cyan-200 duration-500 transform origin-center hover:translate-y-[-.5rem]">
                {/* <img src={photo} alt="candidate Img" className="w-16 h-16 rounded" /> */}
                <div className="flex justify-between items-center gap-1 mb-4">
                    <Avatar img={photo} size="lg" rounded status="online" statusPosition="bottom-right" />
                    <div>
                        <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{name}</h5>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                        </Rating>
                    </div>
                    <div className="flex justify-end">
                        <Dropdown inline label="" placement="bottom">
                            <Dropdown.Item>
                                <Button
                                    onClick={() => handleDelete(_id)}
                                    color="failure" className=""><ImBin /></Button>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
                <p className="text-base text-gray-500">Email: {email}</p>
                <p className="text-base text-gray-500">Phone: {phone}</p>
                <p className="text-base text-gray-500">Languages: {language}</p>
                <div className="flex justify-between items-center border-b-2 pb-5">
                    <div className="flex items-center text-gray-500">
                        <IoLocationOutline />
                        <p className="ml-1"> {address}</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaMoneyCheckDollar />
                        <p className="ml-1"> {salary}</p>
                    </div>
                </div>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <a
                        href={resume}                    >
                        <button
                            type="button"
                            className="inline-flex w-[135px] justify-center rounded hover:bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium hover:text-white bg-white text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Resume
                        </button>
                    </a>
                    <a
                        href={coverLetter}
                    >
                        <button
                            type="button"
                            className="inline-flex w-[135px] justify-center rounded bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            View CV
                        </button>
                    </a>
                </div>
            </Card>
        </div>
    );
};

CandidateCard.propTypes = {
    candidate:PropTypes.object,
    candidates:PropTypes.object,
    setCandidate:PropTypes.object,
}

export default CandidateCard;