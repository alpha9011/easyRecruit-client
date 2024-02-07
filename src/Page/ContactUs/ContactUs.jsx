import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import facebook from "../../../src/assets/facebook.png"
import insta from "../../../src/assets/instagram.png"
import linkedin from "../../../src/assets/linkedin.png"
import twitter from "../../../src/assets/twitter.jpg"
import ContactForm from "./ContactForm/ContactForm";
// import bg from "../../../src/assets/city.jpg"
import "./contactUs.css"
const ContactUs = () => {
    return (
        <div className="contactPage">
            <h1 className="text-7xl text-center font-bold text-white pt-10">Get In Touch</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 p-10">
                {/* left column */}
                <ContactForm></ContactForm>

                {/* right column */}
                <div className="max-w-96 flex flex-col gap-3">

                    {/* contact Info */}
                    <div className="contact-info text-white w-100% p-6 rounded-xl" data-aos="fade-up-left" data-aos-duration="1000">
                        <p className="text-2xl font-bold mb-3">Contact Info</p>
                        <div className="flex items-center mb-2">
                            <div className="bg-teal-400 p-2 rounded-full mr-2">
                                <IoLocation className="text-xl" />
                            </div>
                            <p className="">Level-4, 34, Awal Centre, Banani, Dhaka, Bangladesh</p>
                        </div>
                        <div className="flex items-center mb-2 text-white max-w-96">
                            <div className="bg-teal-400 p-2 rounded-full mr-2">
                                <MdOutlineMarkEmailUnread className="text-xl"></MdOutlineMarkEmailUnread>
                            </div>
                            <p className="">easyrecruitofficial@gmail.com</p>
                        </div>
                        <div className="flex items-center mb-5 text-white max-w-96">
                            <div className="bg-teal-400 p-2 rounded-full mr-2">
                                <LuPhoneCall className="text-xl"></LuPhoneCall>
                            </div>
                            <div>
                                <p className="">+202 54894314</p>
                                <p className="">+880 24389027</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-3 ">
                            <div>
                                <a href="https://facebook.com">
                                    <img className="rounded-full transition-transform duration-500 transform origin-center hover:translate-y-[-.3rem]" src={facebook} alt="facebook" />
                                </a>
                            </div>
                            <div>
                                <a href="https://instagram.com">
                                    <img className="rounded-full transition-transform duration-500 transform origin-center hover:translate-y-[-.3rem]" src={insta} alt="instagram" />
                                </a>
                            </div>
                            <div>
                                <a href="https://twitter.com">
                                    <img className="rounded-full h-10 transition-transform duration-500 transform origin-center hover:translate-y-[-.3rem]" src={twitter} alt="twitter" />
                                </a>
                            </div>
                            <div className="">
                                <a href="https://linkedin.com">
                                    <img className="transition-transform duration-500 transform origin-center hover:translate-y-[-.3rem]" src={linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* map */}
                    <div data-aos="fade-up-left" data-aos-duration="1000">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50774.468702065715!2d-122.04364444999999!3d37.30924995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1707295497047!5m2!1sen!2sbd"
                            width="100%"
                            height="390"
                            className='map rounded'
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;