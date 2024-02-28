import { Button, Label, Modal, Table, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const EmailModal = ({ candidate }) => {
    const axiosSecure = useAxiosSecure()
   
    // modal functionality
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }

const {  refetch, data:messages = [] } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
        const res = await axiosSecure.get('/interviewMessage')
       const allMessages = res.data;
       const message = allMessages.find( message => message?.email === candidate?.email)
     
      return message
    }
})

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
                    refetch()
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

    return (
       <div>
        {
            messages.email ? <button>see details</button> 


            : 
            <div className="flex justify-center">
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
        </div>
        }
       </div>
    );
};

export default EmailModal;