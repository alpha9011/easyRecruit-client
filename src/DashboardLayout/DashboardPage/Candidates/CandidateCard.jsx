import { Button, Card, Dropdown } from "flowbite-react";
import Swal from "sweetalert2";
import { ImBin } from "react-icons/im";

const CandidateCard = (candidate) => {
    console.log(candidate);
    const { name, address, salary, phone, email, resume, coverLetter, _id } = candidate.candidate || {};
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
        });
    }
    return (
        <div className="flex justify-center border">
            <Card className="max-w-xs border transition-transform hover:border-cyan-200 duration-500 transform origin-center hover:translate-y-[-.5rem]">
                <div className="flex justify-end px-4">
                    <Dropdown inline label="" placement="bottom">
                        <Dropdown.Item>
                            <Button
                                onClick={() => handleDelete(_id)}
                                color="failure" className=""><ImBin /></Button>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Name: {name}</h5>
                <p className="mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg">Email: {email}</p>
                <p className="mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg">Phone: {phone}</p>
                <p className="mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg">Address:{address}</p>
                <p className="mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg">Expected Salary: {salary}</p>
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

export default CandidateCard;