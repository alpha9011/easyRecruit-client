import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Label, Modal, Spinner, Table, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import CandidatesDetail from "../../DashboardAdminPage/AllJobs/CandidatesDetail";

const ShortListed = () => {
    const axiosSecure = useAxiosSecure()

    // hook form things
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const mailInfo = {
            email: data.email,
            subject: data.subject,
            message: data.message
        }
        console.log(mailInfo);
        axiosSecure.post('/interviewMessage', mailInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Email send successFully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset()
                }
            })
    }

    // modal functionality
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }
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

                          <Table.Cell>
                           <>
                  <div className="flex justify-center">
                      <Button onClick={() => setOpenModal(true)}>Send Email</Button>
                       </div>
                          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                                <Modal.Header className="bg-gray-100" />
                                  <Modal.Body className="bg-gray-100 rounded-b-md">
                                   <div className="space-y-6">
                                     <h3 className="text-xl font-medium text-gray-900 dark:text-white">Send Email to {candidate.name}</h3>
                                  <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md w-full flex-col gap-4 mb-8">
                                       <div>
                                         <div className="mb-2 block">
                                       <Label htmlFor="email" value="Email address" />
                                       </div>
                                       <TextInput id="email" type="email" {...register("email", { required: true })} name='email' placeholder="receveres email address" defaultValue={candidate.email} shadow />
                                            {errors.email && <span className="text-red-600">Email address is required</span>}
                                         </div>
                                        <div>
                                       <div className="mb-2 block">
                                     <Label htmlFor="subject" value="Email subject" />
                                      </div>
                                      <Textarea id="subject" type="text" {...register("subject", { required: true })} name='subject' placeholder="Enter the subject here" defaultValue={`Congratulation!!! You are short-listed for the post of ${candidate.jobTitle} on ${candidate.companyName}.`} shadow />
                                       {errors.name && <span className="text-red-600">Email subject is required</span>}
                                      </div>
                                      <div>
                                      <div className="mb-2 block">
                                           <Label htmlFor="message" value="Message" />
                                         </div>
                                         <Textarea id="message" type="text" {...register("message", { required: true })} name='message' placeholder="Enter your message" defaultValue={`Dear ${candidate.name},\n\nThank you for applying to our position. We have received your CV and shortlisted your application as suitable for this role. After reviewing all applications for this position, we may contact you to discuss a potential interview.\n\nThank you\nEasyRecruit`} rows={10} shadow />
                                           {errors.message && <span className="text-red-600">message is required</span>}
                                     </div>
                                      <Button type="submit" >Send Message</Button>
                                     </form>
                                     </div>
                                     </Modal.Body>
                                 </Modal>
                                                </>
                                 </Table.Cell>
                                 
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