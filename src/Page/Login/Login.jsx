import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');


    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }


    return (
        <div>

            <Link className="text-green-500 font-bold pl-3" onClick={() => setOpenModal(true)}> SignIn</Link>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-3xl text-center">Hi, Welcome Back!</h3>

                        <p className="text-center">Still do not have an account? <Link className="text-green-500 pl-3" to={`/register`}>Sign up</Link></p>


                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email*" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password*" />
                            </div>
                            <TextInput id="password" type="password" placeholder="******" required />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-green-500 hover:underline dark:text-cyan-500">
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <Button className="w-full bg-green-500">LOGIN</Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <Link to={`/register`} className="text-green-500">
                                Create account
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;