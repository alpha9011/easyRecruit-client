import "./contactForm.css"
import { FaUserEdit } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { Button } from "flowbite-react";
const ContactForm = () => {

    const form = useRef();

    // Function for send the massege via mail
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fcuynvh', 'template_y6v855v', form.current, {
                publicKey: '2nqU8uKs59WuxwG1d',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your message has been send successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                },
            );
    };
    return (
        <div className="wrapper w-96 md:w-[400px] lg:w-[500px]" data-aos="fade-up-right" data-aos-duration="1000">
            <form ref={form} onSubmit={sendEmail}>
                <h1>Send a massege</h1>
                <div className="input-box">
                    <input type="text" name="from_name" placeholder="Your name" required />
                    <FaUserEdit className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" name="from_email" placeholder="Email" required />
                    <MdMarkEmailUnread className="icon" />
                </div>
                <div className="input-box">
                    <input type="number" name="number" placeholder="Number" />
                    <MdOutlinePhoneIphone className="icon" />
                </div>
                <div>
                    <textarea placeholder="write your message" name="message" cols="30" rows="10" className="w-full rounded-3xl mb-5 bg-transparent border-2 border-gray-400 text-white" required></textarea>
                </div>
                <Button type="submit" gradientDuoTone="purpleToBlue">Send</Button>
            </form>
        </div>
    );
};

export default ContactForm;