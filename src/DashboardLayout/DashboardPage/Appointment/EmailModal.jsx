import { Button, Label, Modal, Table, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EmailModal = ({ candidate }) => {
    // console.log(candidate);

    const axiosSecure = useAxiosSecure()

    // modal functionality
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }

    // hook form things
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        const start = new Date(data.date + "T" + data.strating);
        const end = new Date(data.date + "T" + data.ending);
        const mailInfo = {
            email: data.email,
            subject: data.subject,
            message: data.message,
            link: data.link,
            title: data.title,
            strating: start,
            ending: end,
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
                    }); zz
                    reset()
                }
            })
    }


    // disable all previeos date to select
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const minDate = today.toISOString().split('T')[0];

    return (
        <div className="flex justify-center">
            <Table.Cell>
                <>
                    <div className="flex justify-center">
                        <Button onClick={() => setOpenModal(true)}>Send Email</Button>
                    </div>
                    <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
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
                                        {errors.email && <span className="text-red-600">
                                            Email address is required</span>}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="subject" value="Email subject" />
                                        </div>
                                        <Textarea id="subject" type="text" {...register("subject", { required: true })} name='subject' placeholder="Enter the subject here" defaultValue={`Congratulation!!! You are short-listed for the post of ${candidate.jobTitle} on ${candidate.companyName}.`} shadow />
                                        {errors.subject && <span className="text-red-600">Email subject is required</span>}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="title" value="Interview title" />
                                        </div>
                                        <Textarea id="title" type="text" {...register("title", { required: true })} name='title' placeholder="Enter the title here" defaultValue={`Interview of ${candidate.name} for ${candidate.jobTitle} on ${candidate.companyName}.`} shadow />
                                        {errors.title && <span className="text-red-600">Interview title is required</span>}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="message" value="Message" />
                                        </div>
                                        <Textarea id="message" type="text" {...register("message", { required: true })} name='message' placeholder="Enter your message" defaultValue={`Dear ${candidate.name},\n\nThank you for applying to our position. We have received your CV and shortlisted your application as suitable for this role. After reviewing all applications for this position, we may contact you to discuss a potential interview.\n\nThank you\nEasyRecruit`} rows={10} shadow />
                                        {errors.message && <span className="text-red-600">message is required</span>}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="date" value="Interview date" />
                                        </div>
                                        <TextInput id="date" type="date" min={minDate} {...register("date", { required: true })} name='date' placeholder="Enter the date time here" shadow />
                                        {errors.date && <span className="text-red-600">Interview date is required</span>}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="strating" value="Interview strating" />
                                        </div>
                                        <TextInput id="strating" type="time" {...register("strating", { required: true })} name='strating' placeholder="Enter the strating time here" shadow />
                                        {errors.strating && <span className="text-red-600">Interview strating time is required</span>}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="ending" value="Interview ending" />
                                        </div>
                                        <TextInput id="ending" type="time" {...register("ending", { required: true })} name='ending' placeholder="Enter the ending time here" shadow />
                                        {errors.ending && <span className="text-red-600">Interview ending time is required</span>}
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="link" value="Meet link" />
                                        </div>
                                        <Textarea id="link" type="text" {...register("link", { required: true })} name='link' placeholder="Enter the link here" shadow />
                                        {errors.link && <span className="text-red-600">Email link is required</span>}
                                    </div>
                                    <Button type="submit" >Send Message</Button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            </Table.Cell>
        </div>
    );
};

export default EmailModal;