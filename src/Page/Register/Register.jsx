import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaRegCircle } from "react-icons/fa";
// import bgRegister from '../../assets/women.jpg'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import {  updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Register = () => {
 
  const location = useLocation()
  const navigate = useNavigate()
  const axiospublic = useAxiosPublic()
  const { createUser } = useContext(AuthContext);
  // const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
   

    
      const usersInfo = {
        name: data.name,
        email: data.email,
        image: data.photo,
        number: data.number,
        company: data.company,
        workPlace: data.workPlace,
        jpLimit: 0,
        userRole: 'free-user'
      }

      axiospublic.post('/users', usersInfo)
      .then(res => {
        console.log('users added in database', res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration successfully",
            showConfirmButton: false,
            timer: 1500
          });
          reset()
        }
      })

      
    


    

    createUser(data.email, data.password)
      .then(result => {


         // verification 
        //  sendEmailVerification(result.user)
        //  .then(() => {
        //    Swal.fire({
        //      position: "top-end",
        //      icon: "success",
        //      title: "Check your email and verify",
        //      showConfirmButton: false,
        //      timer: 1500
        //    });
        //  })
        //  .catch(error => console.log(error))


        updateProfile(result.user, {
          displayName: data.name,
          photoURL: data.photo
        })
          .then(() => {

          })
          .catch(() => { })
        // Navigate('/')
        navigate(location?.state ? location.state : "/")
      })
      .catch(err => {
        console.log(err);
        alert(err.message)
      })
  }



  return (

    <div>
      <div 
      style={{ background: 'linear-gradient(to right,  #1a2980, #3789b4, #7fdbe8)',

    }}
      
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 md:p-10 lg:gap-16  lg:p-24'>
          <div>

            <div className='text-xl  text-gray-300'>
              <h1 className='text-5xl font-semibold mb-4'>Try EasyRecruit for Free <br /> Today</h1>
              <p>Start a 14-day free trial today.</p>
              <h3>Post your first job for free today and see why over 10,000 growing businesses trust EasyRecruit to power their hiring process.</h3>
              <ul className='mt-4'>
                <li className='flex items-center gap-2'><FaRegCircle className='text-sm' />Voted #1 most user-friendly applicant tracking system</li>
                <li className='flex items-center gap-2'><FaRegCircle className='text-sm' />Reduces time to hire by 50%</li>
                <li className='flex items-center gap-2'><FaRegCircle className='text-sm' />Creates a lasting candidate experience</li>
                <li className='flex items-center gap-2'><FaRegCircle className='text-sm' />Transparent pricing that is actually affordable</li>
              </ul>
            </div>

            <div className='mt-4 text-gray-300' style={{ fontStyle: 'italic' }}>
              <p>Note: Indeed access is restricted during the trial experience. To access Indeed, please purchase a EasyRecruit plan.</p>

              <p className='mt-4'>*If you are looking for a job, we kindly request that you refrain from completing this form. The EasyRecruit free trial is exclusively available for businesses seeking to make new hires, and not intended for individual candidates. Thank you for your understanding</p>
            </div>
          </div>

          <div className='bg-[#b9cdc6]  rounded-lg  p-12  lg:w-[500px]'>
            

            <h2 className='text-2xl font-semibold mb-4 text-center'>Create a Free Account</h2>


            <div className="">


              <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>

                <div className="w-full">
                  <label className="block mb-1">
                    <span className="font-semibold"><span className='text-red-700 pr-2'>*</span>Full Name</span>
                  </label>
                  <input type="text" {...register("name", { required: true })} name='name' placeholder="your name" className="input border-none rounded-md w-full" />
                  {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
                </div>

                <div className="w-full">
                  <label className="block mb-1">
                    <span className="font-semibold"><span className='text-red-700 pr-2'>*</span>Email</span>
                  </label>
                  <input type="email" {...register("email")} name='email' placeholder="email" className="input border-none rounded-md w-full " required />
                </div>


                <div className="w-full">
                  <label className="block mb-1">
                    <span className="font-semibold"><span className='text-red-700 pr-2'>*</span>Photo URL</span>
                  </label>
                 

                  <input type="file" {...register("image", { required: true })} name='image' placeholder="photo url" className="file-input file-input-bordered w-full max-w-xs" />

                  {errors.photo && <span className='text-red-500 mt-1'>This field is required</span>}
                </div>



                





                <div className="w-full">
                  <label className="block mb-1">
                    <span className="font-semibold"><span className='text-red-700 pr-2'>*</span>Phone number</span>
                  </label>
                  <input type="text" {...register("number")} name='number' placeholder="1+XXX-XXX-XXX" className="input border-none rounded-md w-full " required />
                </div>


                <div className="w-full">
                  <label className="block mb-1">
                    <span className="font-semibold"><span className='text-red-700 pr-2'>*</span>Password</span>
                  </label>
                  <input type="password" {...register("password", {
                    required: true, minLength: 6, maxLength: 20,

                    pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/

                  })} name='password' placeholder="password" className="input border-none rounded-md w-full" required />

                  {errors.password?.type === 'minLength' && <span className='text-red-500 mt-1'>Password should be 6-20 letters</span>}
                  {errors.password?.type === 'pattern' && <span className='text-red-500 mt-1'>Make password stronger</span>}

                </div>

                <div className="w-full">
                  <label className="block mb-1">
                    <span className="font-semibold"><span className='text-red-700 pr-2'>*</span>Company name</span>
                  </label>
                  <input type="text" {...register("company")} name='company' placeholder="Company Name" className="input border-none rounded-md w-full " required />
                </div>


                <div className='w-full'>
                  <label className="block mb-1 font-semibold"><span className='text-red-700 pr-2'>*</span>How do you know about us?</label>
                  <select {...register("workPlace")} className="input border-none rounded-md w-full">

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
                <p>Have an account? <Link  className='ml-2 font-bold text-cyan-600  hover:underline' to={'/login'}>Login</Link> </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Register;