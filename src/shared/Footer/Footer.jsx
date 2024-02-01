const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:w-1/2 mb-4 sm:mb-0 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col items-center">
                        {/* First Column: Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold dark:text-white">Contact Us</h3>
                            {/* Add your contact information here */}
                            <p className="text-gray-500">Email: easyrecruit@gmail.com</p>
                            <p className="text-gray-500">Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    {/* Vertical Line */}
                    <div className="border-l border-gray-200 h-20 mx-4 sm:mx-0" />
                    <div className="sm:w-1/2 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col items-center">
                        {/* Second Column: Follow Us */}
                        <div>
                            <h3 className="text-lg font-semibold dark:text-white">Follow Us</h3>
                            {/* Add your social media icons/links here */}
                            <a href="#" className="text-gray-500 hover:underline me-4">Twitter</a>
                            <a href="#" className="text-gray-500 hover:underline me-4">Facebook</a>
                            <a href="#" className="text-gray-500 hover:underline">Instagram</a>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline"><span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Easy<span className='text-yellow-400'>Recruit</span>™</span></a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
