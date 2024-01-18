import { Card } from "flowbite-react";
import person1 from "../../assets/user1.jpg"
import person2 from "../../assets/user2.jpg"
import person3 from "../../assets/women.jpg"
import person4 from "../../assets/women1.jpg"
import facebook from "../../assets/facebook.jpg"
import insta from "../../assets/instagram.png"
import linkdin from "../../assets/linkedin.jpg"
import twitter from "../../assets/twitter.jpg"
const Team = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-14 px-5">
            <h1 className="text-center text-6xl font-bold mb-8">Meet Our Team</h1>
            <div className="grid grid-cols-1 min-[700px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
                <div className="flex justify-center">
                    <Card
                        className="max-w-xs text-center rounded-tr-3xl bg-green-50"
                    >
                        <img src={person1} alt="" className="rounded-full w-40 h-40 mx-auto" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            John Doe
                        </h5>
                        <p className="-mt-4">Product Designer</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <div className="flex flex-row justify-center gap-2">
                            <button className="border rounded-full">
                                <img src={facebook} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={insta} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={linkdin} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={twitter} alt="facebook" className="w-10 h-10" />
                            </button>
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center">
                    <Card
                        className="max-w-xs text-center rounded-tr-3xl bg-green-50"
                    >
                        <img src={person3} alt="" className="rounded-full w-40 h-40 mx-auto" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Christina Miller
                        </h5>
                        <p className="-mt-4">Marketing Expert</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <div className="flex flex-row justify-center gap-2">
                            <button className="border rounded-full">
                                <img src={facebook} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={insta} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={linkdin} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={twitter} alt="facebook" className="w-10 h-10" />
                            </button>
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center">
                    <Card
                        className="max-w-xs text-center rounded-tr-3xl bg-green-50"
                    >
                        <img src={person2} alt="" className="rounded-full w-40 h-40 mx-auto" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Elizabeth Foster
                        </h5>
                        <p className="-mt-4">React Developer</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <div className="flex flex-row justify-center gap-2">
                            <button className="border rounded-full">
                                <img src={facebook} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={insta} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={linkdin} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={twitter} alt="facebook" className="w-10 h-10" />
                            </button>
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center">
                    <Card
                        className="max-w-xs text-center rounded-tr-3xl bg-green-50"
                    >
                        <img src={person4} alt="" className="rounded-full w-40 h-40 mx-auto" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Elizabeth Foster
                        </h5>
                        <p className="-mt-4">UI/UX Designer</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <div className="flex flex-row justify-center gap-2">
                            <button className="border rounded-full">
                                <img src={facebook} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={insta} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={linkdin} alt="facebook" className="w-10 h-10" />
                            </button>
                            <button className="border rounded-full">
                                <img src={twitter} alt="facebook" className="w-10 h-10" />
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Team;