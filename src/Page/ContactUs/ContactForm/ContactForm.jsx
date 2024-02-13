import "./contactForm.css"
import { FaUserEdit } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
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
                <button type="submit" className="before:ease relative h-12 w-40 overflow-hidden border bg-gray-50 text-black shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-black before:opacity-10 before:duration-1000 hover:shadow-green-500 hover:before:-translate-x-96" >Send</button>
            </form>
        </div>
    );
};

export default ContactForm;