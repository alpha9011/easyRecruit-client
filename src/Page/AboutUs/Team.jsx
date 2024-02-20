import person1 from "../../assets/user1.jpg"
import person2 from "../../assets/user2.jpg"
import person3 from "../../assets/women.jpg"
import person4 from "../../assets/women1.jpg"
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import "./Team.css"
const Team = () => {
    return (
        <div className="mx-auto my-14 px-5" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-center text-6xl font-bold mb-8">Meet Our <span className="text-yellow-400">Team</span></h1>
            <div className="body">
                <div className="cardContainer">
                    {/* card 1 */}
                    <div className="card">
                        <div className="imgContainer">
                            <img src={person4} />
                        </div>
                        <div className="content">
                            <div className="detailes">
                                <h2>Elizabeth Foster<br /><span>Senior UX/UI Designer</span></h2>
                                <div className="data">
                                    <h3>342<br /><span>Posts</span></h3>
                                    <h3>120k<br /><span>Followers</span></h3>
                                    <h3>252<br /><span>Following</span></h3>
                                </div>
                                <div className="flex flex-row justify-center gap-2">
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiFacebook className="w-8 h-8"></CiFacebook>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <SlSocialInstagram className="w-8 h-6"></SlSocialInstagram>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiLinkedin className="w-8 h-8"></CiLinkedin>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <RiTwitterXLine className="w-8 h-7"></RiTwitterXLine>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card">
                        <div className="imgContainer">
                            <img src={person1} />
                        </div>
                        <div className="content">
                            <div className="detailes">
                                <h2>Christina Miller<br /><span>Senior UX/UI Designer</span></h2>
                                <div className="data">
                                    <h3>342<br /><span>Posts</span></h3>
                                    <h3>120k<br /><span>Followers</span></h3>
                                    <h3>252<br /><span>Following</span></h3>
                                </div>
                                <div className="flex flex-row justify-center gap-2">
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiFacebook className="w-8 h-8"></CiFacebook>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <SlSocialInstagram className="w-8 h-6"></SlSocialInstagram>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiLinkedin className="w-8 h-8"></CiLinkedin>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <RiTwitterXLine className="w-8 h-7"></RiTwitterXLine>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="card">
                        <div className="imgContainer">
                            <img src={person3} />
                        </div>
                        <div className="content">
                            <div className="detailes">
                                <h2>John Doe<br /><span>Senior UX/UI Designer</span></h2>
                                <div className="data">
                                    <h3>342<br /><span>Posts</span></h3>
                                    <h3>120k<br /><span>Followers</span></h3>
                                    <h3>252<br /><span>Following</span></h3>
                                </div>
                                <div className="flex flex-row justify-center gap-2">
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiFacebook className="w-8 h-8"></CiFacebook>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <SlSocialInstagram className="w-8 h-6"></SlSocialInstagram>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiLinkedin className="w-8 h-8"></CiLinkedin>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <RiTwitterXLine className="w-8 h-7"></RiTwitterXLine>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="card">
                        <div className="imgContainer">
                            <img src={person2} />
                        </div>
                        <div className="content">
                            <div className="detailes">
                                <h2>Steven Smith<br /><span>Senior UX/UI Designer</span></h2>
                                <div className="data">
                                    <h3>342<br /><span>Posts</span></h3>
                                    <h3>120k<br /><span>Followers</span></h3>
                                    <h3>252<br /><span>Following</span></h3>
                                </div>
                                <div className="flex flex-row justify-center gap-2">
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiFacebook className="w-8 h-8"></CiFacebook>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <SlSocialInstagram className="w-8 h-6"></SlSocialInstagram>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiLinkedin className="w-8 h-8"></CiLinkedin>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <RiTwitterXLine className="w-8 h-7"></RiTwitterXLine>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="card">
                        <div className="imgContainer">
                            <img src={person4} />
                        </div>
                        <div className="content">
                            <div className="detailes">
                                <h2>Raveena Tendon <br /><span>Senior UX/UI Designer</span></h2>
                                <div className="data">
                                    <h3>342<br /><span>Posts</span></h3>
                                    <h3>120k<br /><span>Followers</span></h3>
                                    <h3>252<br /><span>Following</span></h3>
                                </div>
                                <div className="flex flex-row justify-center gap-2">
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiFacebook className="w-8 h-8"></CiFacebook>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <SlSocialInstagram className="w-8 h-6"></SlSocialInstagram>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <CiLinkedin className="w-8 h-8"></CiLinkedin>
                                    </button>
                                    <button className="border-2 p-1 hover:shadow-xl rounded-full">
                                        <RiTwitterXLine className="w-8 h-7"></RiTwitterXLine>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;