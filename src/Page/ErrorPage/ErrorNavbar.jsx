import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const ErrorNavbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section className="flex justify-center gap-5 max-w-200px">
                <div className="flex md:order-2">
                    <Button onClick={() => navigate(-1)}>Go Back</Button>
                </div>
                <div className="flex md:order-2">
                    <Button><Link to={"/"}>Home</Link></Button>
                </div>
            </section>
        </div>
    );
};

export default ErrorNavbar;