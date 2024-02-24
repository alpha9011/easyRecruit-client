import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Spinner, Table } from "flowbite-react";
import EmailModal from "./EmailModal";
// import CandidatesDetail from "../../DashboardAdminPage/AllJobs/CandidatesDetail";

const ShortListed = () => {
    const axiosSecure = useAxiosSecure()

    const { title, companyName } = useLoaderData()
    // const axiosSecure = useAxiosSecure()
    const { isLoading, data: candidates = [] } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
            const res = await axiosSecure.get('/applicantCV/selected')
            const applier = res.data;
            console.log(applier);
            const candidate = applier.filter(apply =>
                apply.companyName === companyName && apply.jobTitle === title)
            return candidate
        }
    })

    if (isLoading) {
        return <div className=" h-screen flex items-center justify-center">
            <Spinner aria-label="Large spinner example" size="lg" />
        </div>
    }
    return (
        <div className="text-white">
            <h1 className='text-center font-semibold text-2xl'>{companyName}</h1>
            <h1 className='text-center font-semibold text-3xl'>{title} Shortlisted Candidates: {candidates.length}</h1>
            {
                candidates.length > 0 ?
                    <div className="overflow-x-auto mt-5 ">
                        <Table striped>
                            <Table.Head className='text-center'>
                                <Table.HeadCell>Photo</Table.HeadCell>
                                <Table.HeadCell>Name</Table.HeadCell>
                                <Table.HeadCell>Phone</Table.HeadCell>
                                <Table.HeadCell>Email</Table.HeadCell>
                                <Table.HeadCell>Schedule</Table.HeadCell>

                            </Table.Head>
                            <Table.Body className="divide-y">

                                {

                                    candidates.map(candidate =>

                                        <Table.Row key={candidate._id} className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
                                            <Table.Cell>
                                                <Avatar img={candidate.photo} />
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{candidate?.name}</Table.Cell>
                                            <Table.Cell>{candidate?.phone}</Table.Cell>
                                            <Table.Cell>{candidate?.email}</Table.Cell>
                                            <EmailModal candidate={candidate}></EmailModal>
                                        </Table.Row>

                                    )

                                }

                            </Table.Body>
                        </Table>
                    </div>

                    :

                    <div className='flex h-[50vh] justify-center items-center '>
                        <h1>This post do not have any short-listed candidate yet</h1>
                    </div>

            }

        </div>
    );
};

export default ShortListed;