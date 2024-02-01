<<<<<<< HEAD
// import { Button, FileInput, Footer, Label, Select, TextInput } from 'flowbite-react';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
// import Login from '../Login/Login';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import Toastify from 'toastify-js';
// import "toastify-js/src/toastify.css";
// import { FaRegCircle } from "react-icons/fa";


// import bgRegister from '../../assets/women.jpg'
// const Register = () => {

//     const { createUser, handleUpdateProfile } = useContext(AuthContext);
//     const Navigate = useNavigate();
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const firstName = event.target.firstName.value;
//         const lastName = event.target.lastName.value;
//         const email = event.target.email.value;
//         const img = event.target.file.value;
//         const password = event.target.password.value;
//         const company = event.target.company.value;
//         const PhoneNO = event.target.PhoneNO.value;
//         const aboutUS = event.target.aboutUS.value;
//         console.log(firstName, lastName, email,password, company, PhoneNO,aboutUS);

//         // validation 
//         if (password.length < 6) {
            
//             Toastify({
//                 text: "Password must be at least 6 characters",
//                 className: "info",
//                 style: {
//                     background: "linear-gradient(to right, #b30000, #ff6666)",
//                 }
//             }).showToast();

//             return;
//         }

//         else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password)) {
//             Toastify({
//                 text: "You should use a valid password",
//                 className: "info",
//                 style: {
//                     background: "linear-gradient(to right, #b30000, #ff6666)",
//                 }
//             }).showToast();
//             return;
//         }

//         // creating a new user
//         createUser(email, password)
//             .then(res => {
//                 console.log(res.user);
//                 handleUpdateProfile(name, img)
//                     .then(() => {
//                         Toastify({
//                             text: "Register successful",
//                             className: "info",
//                             style: {
//                                 background: "linear-gradient(to right, #00b09b, #96c93d)",
//                             }
//                         }).showToast();
//                         Navigate('/')
//                     })
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     };



//     return (

//         <>
//         <div style={{
//             backgroundImage: `linear-gradient(to right, rgba(255, 107, 107, 0.5), rgba(255, 224, 102, 0.5)), url(${bgRegister})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}
//             >
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 md:p-10 lg:gap-16  lg:p-24'>
//             <div>

// <div className='text-xl'>
//     <h1 className='text-5xl font-semibold mb-4'>Try EasyRecruit for Free <br /> Today</h1>
//     <p>Start a 14-day free trial today with unlimited users and no credit card required.*</p>
//     <h3>Post your first job for free today and see why over 10,000 growing businesses trust JazzHR to power their hiring process.</h3>
//     <ul className='mt-4'>
//         <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Voted #1 most user-friendly applicant tracking system</li>
//         <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Reduces time to hire by 50%</li>
//         <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Creates a lasting candidate experience</li>
//         <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Transparent pricing that is actually affordable</li>
//     </ul>
// </div>

// <div className='mt-4' style={{fontStyle:'italic'}}>
// <p>Note: Indeed access is restricted during the trial experience. To access Indeed, please purchase a JazzHR plan.</p>

// <p className='mt-4'>*If you are looking for a job, we kindly request that you refrain from completing this form. The JazzHR free trial is exclusively available for businesses seeking to make new hires, and not intended for individual candidates. Thank you for your understanding</p>
// </div>
// </div>

// <div className='bg-[#b9cdc6]  p-12  lg:w-[500px]'>

// <h2 className='text-2xl font-semibold mb-4 text-center'>Create a Free Account</h2>
// <form onSubmit={handleSubmit} className="flex max-w-md flex-col  gap-4">

//     <div>
//         <div className="mb-2 block">
//             <Label htmlFor="firstName" value="*First name" />
//         </div>
//         <TextInput id="firstName" type="text" required shadow />
//     </div>


//     <div>
//         <div className="mb-2 block">
//             <Label htmlFor="lastName" value="*Last name" />
//         </div>
//         <TextInput id="lastName" type="text" required shadow />
//     </div>

//     <div>
//         <div className="mb-2 block">
//             <Label htmlFor="email" value="*Work email address" />
//         </div>
//         <TextInput id="email" type="email" placeholder="name123@gmail.com" required shadow />
//     </div>


//     <div id="fileUpload" className="max-w-md">
// <div className="mb-2 block">
// <Label htmlFor="file" value="*Image" />
// </div>
// <FileInput id="file" helperText="" />
// </div>

//     <div>
//         <div className="mb-2 block">
//             <Label htmlFor="PhoneNO" value="*Phone Number" />
//         </div>
//         <TextInput id="PhoneNO" type="number" placeholder='1+XXX-XXX-XXX' required shadow />
//     </div>
//     <div>
//         <div className="mb-2 block">
//             <Label htmlFor="password" value="*Your password" />
//         </div>
//         <TextInput id="password" type="password" required shadow />
//     </div>



//     <div className="max-w-md">
//         <div className="mb-2 block">
//             <Label htmlFor="company" value="*Company " />
//         </div>
//         <TextInput id="company" type="text" required shadow />

//     </div>



//     <div className="max-w-md">
//         <div className="mb-2 block">
//             <Label htmlFor="aboutUS" value="*How did you hear about us?:" />
//         </div>
//         <Select id="aboutUS" required>
//             <option>  Select...</option>
//             <option>Social Media</option>
//             <option>Advertising</option>
//             <option>Previous Customer</option>
//             <option>I am looking for a job</option>

//         </Select>
//     </div>




//     <Button type="submit">Register New Account</Button>



// </form>

// <div className="flex justify-center items-center mt-4">
//     <p>Have an account? <Login></Login> </p>
    
// </div>
// </div>
//             </div>
            
//         </div>
//         <Footer/>
//         </>
//     );
// };

// export default Register;



import { Button, FileInput, Footer, Label, Select, TextInput } from 'flowbite-react';
=======
import { Footer, } from 'flowbite-react';
>>>>>>> 993e2044e92f0108744ac3e5f418dac4ffaefb44
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Login from '../Login/Login';
import Toastify from 'toastify-js'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaRegCircle } from "react-icons/fa";
import bgRegister from '../../assets/women.jpg'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
<<<<<<< HEAD



const Register = () => {
    const axiosPublic = useAxiosPublic();

    const { createUser, handleUpdateProfile } = useContext(AuthContext);
=======
import { updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';

const Register = () => {
    const axiospublic = useAxiosPublic()
    const { createUser } = useContext(AuthContext);
>>>>>>> 993e2044e92f0108744ac3e5f418dac4ffaefb44
    const Navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

<<<<<<< HEAD
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const img = event.target.file.value;
        const password = event.target.password.value;
        const company = event.target.company.value;
        const PhoneNO = event.target.PhoneNO.value;
        const aboutUS = event.target.aboutUS.value;
        const canPostJob = 2;

        
        const userInfo = {firstName,lastName,email,img,password,company,PhoneNO,aboutUS,canPostJob}
        console.log(userInfo);

        

        // validation 
        if (password.length < 6) {
            Toastify({
                text: "Password must be at least 6 characters",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #b30000, #ff6666)",
                }
            }).showToast();

            return;
        }

        else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password)) {
            Toastify({
                text: "You should use a valid password",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #b30000, #ff6666)",
                }
            }).showToast();
            return;
        }

        axiosPublic.post('/users', {
            firstName,lastName,email,img,password,company,PhoneNO,aboutUS,canPostJob
        })
        .then((response) => {
            console.log(response.data);

            handleUpdateProfile(userInfo.firstName, userInfo.img)
                .then(() => {
                    Toastify({
                        text: "Register successful",
                        className: "info",
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        }
                    }).showToast();
                    Navigate('/');
                })
                .catch((error) => {
                    console.error(error);
                });
        })
        .catch((error) => {
            console.error(error);
        });

    };

=======
      const onSubmit = (data) => {
    
       createUser(data.email, data.password)
        .then( result => {
                  
                  updateProfile(result.user , {
                      displayName: data.name,
                      photoURL: data.photo
                  })
                  .then(()=> {
                    // create users entry in database
                    const usersInfo = {
                      name: data.name,
                      email: data.email,
                      image: data.photo,
                      number: data.number,
                      company:data.company,
                      workPlace:data.workPlace,
                      jpLimit: 0,
                      userRole: 'free-user'
                    }
                    axiospublic.post('/users', usersInfo)
                    .then( res => {
                      console.log( 'users added in database',res.data);
                      if(res.data.insertedId){
                        Toastify({
                            text: "Job Posted succesfully",
                            className: "info",
                            style: {
                                background: "linear-gradient(to right, #00b09b, #96c93d)",
                            }
                        }).showToast();
                        reset()
                      }
                    })
                   
                  })
                  .catch(()=> {})
                  Navigate('/')
              })
              .catch(err => {
                  console.log(err);
                  alert(err.message)
              })
      }
     
>>>>>>> 993e2044e92f0108744ac3e5f418dac4ffaefb44


    return (

        <>
        <div style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 107, 107, 0.5), rgba(255, 224, 102, 0.5)), url(${bgRegister})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
            >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 md:p-10 lg:gap-16  lg:p-24'>
            <div>

<div className='text-xl'>
    <h1 className='text-5xl font-semibold mb-4'>Try EasyRecruit for Free <br /> Today</h1>
    <p>Start a 14-day free trial today with unlimited users and no credit card required.*</p>
    <h3>Post your first job for free today and see why over 10,000 growing businesses trust JazzHR to power their hiring process.</h3>
    <ul className='mt-4'>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Voted #1 most user-friendly applicant tracking system</li>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Reduces time to hire by 50%</li>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Creates a lasting candidate experience</li>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Transparent pricing that is actually affordable</li>
    </ul>
</div>

<div className='mt-4' style={{fontStyle:'italic'}}>
<p>Note: Indeed access is restricted during the trial experience. To access Indeed, please purchase a JazzHR plan.</p>

<p className='mt-4'>*If you are looking for a job, we kindly request that you refrain from completing this form. The JazzHR free trial is exclusively available for businesses seeking to make new hires, and not intended for individual candidates. Thank you for your understanding</p>
</div>
</div>

<div className='bg-[#b9cdc6]  p-12  lg:w-[500px]'>

<h2 className='text-2xl font-semibold mb-4 text-center'>Create a Free Account</h2>


<div className="">
    

    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
    
    <div className="w-full">
      <label className="block mb-1">
        <span className="font-semibold">*Full Name</span>
      </label>
      <input type="text" {...register("name"  , { required: true })} name='name' placeholder="your name" className="input border-none rounded-md w-full" />
      {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
    </div>

    <div className="w-full">
      <label className="block mb-1">
        <span className="font-semibold">*Work email address</span>
      </label>
      <input type="email" {...register("email")} name='email' placeholder="email" className="input border-none rounded-md w-full " required />
    </div>

 
    <div className="w-full">
      <label className="block mb-1">
        <span className="font-semibold">*Photo URL</span>
      </label>
      <input type="text" {...register("photo"  , { required: true })} name='photo' placeholder="photo url" className="input border-none rounded-md w-full" />
      {errors.photo && <span className='text-red-500 mt-1'>This field is required</span>}
    </div>

    <div className="w-full">
      <label className="block mb-1">
        <span className="font-semibold">*Phone number</span>
      </label>
      <input type="text" {...register("number")} name='number' placeholder="1+XXX-XXX-XXX" className="input border-none rounded-md w-full " required />
    </div>

  
    <div className="w-full">
      <label className="block mb-1">
        <span className="font-semibold">*Password</span>
      </label>
      <input type="password" {...register("password" , { required: true, minLength:6, maxLength: 20 ,

      pattern:/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
         
         })} name='password' placeholder="password" className="input border-none rounded-md w-full" required />

      {errors.password?.type === 'minLength' && <span className='text-red-500 mt-1'>Password should be 6-20 letters</span>}
      {errors.password?.type === 'pattern' && <span className='text-red-500 mt-1'>Make password stronger</span>}

    </div>

    <div className="w-full">
      <label className="block mb-1">
        <span className="font-semibold">*Comapny name</span>
      </label>
      <input type="text" {...register("company")} name='company' placeholder="Company Name" className="input border-none rounded-md w-full " required />
    </div>


    <div className='w-full'>
        <label className="block mb-1 font-semibold">*Workplace Type</label>
            <select {...register("workPlace")} className="input border-none rounded-md w-full">
            <option selected disabled>select a type</option>
            <option value='Social Media'>Social Media</option>
            <option value='Advertising'>Advertising</option>
            <option value='Previous Customer'>Previous Customer</option>
                           
                        </select>
                    </div>
   
    <div className="form-control mt-2">
        <input type="submit" value="REGISTER" className='px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center justify-center gap-2 w-full' />
    </div>
  </form>
  <div className='text-center mt-2'>
  <p>Have an account? <Login></Login> </p>
  </div>
</div>
</div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default Register;

