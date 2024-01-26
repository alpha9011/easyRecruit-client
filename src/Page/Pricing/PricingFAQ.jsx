import { Accordion, Table } from "flowbite-react";

const PricingFAQ = () => {
    return (
        <div>
            <div className="max-w-screen-md mx-auto px-2 text-center mt-16" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="text-3xl mx-2 my-5">Get growing with the plan that is right for your business.</h2>
                <p className="text-lg text-gray-500">Custom plans are available for HR service providers, staffing or employment agencies, franchises,multi-location businesses, and organizations with over 500 employees. We have customized plans for recruitment-based organizations and high-volume hiring.For additional pricing information or custom plans, please <span className="text-blue-500 font-bold cursor-pointer hover:underline">contact us</span>.</p>
            </div>
            {/* Accordion */}
            <div data-aos="fade-up" data-aos-duration="1000" className="my-20 mx-2">
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
                            <div className="overflow-x-auto">
                                <Table striped>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {'Apple MacBook Pro 17"'}
                                            </Table.Cell>
                                            <Table.Cell>Sliver</Table.Cell>
                                            <Table.Cell>Laptop</Table.Cell>
                                            <Table.Cell>$2999</Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>White</Table.Cell>
                                            <Table.Cell>Laptop PC</Table.Cell>
                                            <Table.Cell>$1999</Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                                            <Table.Cell>Black</Table.Cell>
                                            <Table.Cell>Accessories</Table.Cell>
                                            <Table.Cell>$99</Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Google Pixel Phone
                                            </Table.Cell>
                                            <Table.Cell>Gray</Table.Cell>
                                            <Table.Cell>Phone</Table.Cell>
                                            <Table.Cell>$799</Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
                                            <Table.Cell>Red</Table.Cell>
                                            <Table.Cell>Wearables</Table.Cell>
                                            <Table.Cell>$999</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default PricingFAQ;