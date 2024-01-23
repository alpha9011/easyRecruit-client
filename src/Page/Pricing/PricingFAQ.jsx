import { Accordion } from "flowbite-react";

const PricingFAQ = () => {
    return (
        <div>
            <div className="max-w-screen-md mx-auto text-center mt-16">
                <h2 className="text-3xl mx-2 my-5">Get growing with the plan that is right for your business.</h2>
                <p className="text-lg text-gray-500">Custom plans are available for HR service providers, staffing or employment agencies, franchises,multi-location businesses, and organizations with over 500 employees. We have customized plans for recruitment-based organizations and high-volume hiring.For additional pricing information or custom plans, please <span className="text-blue-500">contact us</span>.</p>
            </div>
            {/* Accordion */}
            <div>
                <p className="text-3xl text-center my-10">Frequently Asked Questions</p>
                <Accordion className="max-w-screen-md mx-auto">
                    <Accordion.Panel>
                        <Accordion.Title className="text-blue-500">Why should my business use an ATS?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-black dark:text-gray-400">
                                Businesses can use applicant tracking software to track and filter job applications efficiently. Typical features allow you to parse resumes, organize applications into categories, and easily manage communication with candidates. A recruitment tracking system also provides one central location to collect and store applications versus traditional, disjointed recruiting methods, resulting in siloing data across multiple sites.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-blue-500">How do I transition from other recruiting software to EasyRecrut?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-black dark:text-gray-400">
                                We will migrate all your data from your current ATS into JazzHR completely free. We have successfully migrated customers from all other major applicant tracking systems and we will work with you to ensure that the transition is as seamless as possible.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-blue-500">How do I get traffic to my job openings?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-black dark:text-gray-400">
                                We have integrated with over a dozen free job boards, but if you want to increase visibility for your job you can post to premium job boards as well, all from the same, easy to use interface.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-blue-500">Can I change my plan at any time?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-black dark:text-gray-400">
                                Yes, you can upgrade your service at any time.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-blue-500">Does EasyRecruit have an app?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-black dark:text-gray-400">
                                JazzHR is primarily accessed through your desktop or laptop computer but you can screen candidates and provide interview feedback from any mobile device.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-blue-500">What other HR technologies do you integrate with?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-black dark:text-gray-400">
                                EasyRecruit integrates with a number of third-party HR technologies. Learn more here:
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default PricingFAQ;