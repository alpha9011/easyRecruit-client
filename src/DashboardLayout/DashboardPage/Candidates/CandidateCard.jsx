import { Card, Dropdown } from "flowbite-react";

const CandidateCard = (candidate) => {
    console.log(candidate);
    const { name, address, salary, phone, email, resume, coverLetter } = candidate.candidate || {};
    console.log(name);
    return (
        <div className="flex justify-center border">
            <Card className="max-w-xs border transition-transform hover:border-cyan-200 duration-500 transform origin-center hover:translate-y-[-.5rem]">
                <div className="flex justify-end px-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
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