/* eslint-disable react/no-unescaped-entities */
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footers = () => {

  // details of profile
  const developers = [
    {
      id: 1,
      name: "Fahad Al Sunan",
      avatar: "https://i.ibb.co/9ttzwwQ/839.jpg",
      Profile: "https://www.linkedin.com/in/fahad-al-sunan-96475424b/",
    },
    {
      id: 2,
      name: "Name 2",
      avatar: "https://i.ibb.co/N1RZ93S/CMR-3.jpg",
      Profile: "https://www.facebook.com",
    },
    {
      id: 3,
      name: "Name 3",
      avatar: "https://i.ibb.co/2FTnw3g/CMR-4.jpg",
      Profile: "https://www.facebook.com",
    },
    {
      id: 4,
      name: "Name 4",
      avatar: "https://i.ibb.co/9ttzwwQ/839.jpg",
      Profile: "https://www.facebook.com",
    },
    {
      id: 5,
      name: "Name 5",
      avatar: " https://i.ibb.co/Mg2962z/CMR-5.jpg",
      Profile: "https://www.facebook.com",
    },
  ];


  return (
    <Footer className='w-full mt-14'>
      <div className="w-full mx-auto p-7 bg-blue-200 text-black">
        <div className='flex justify-center'>
          <Footer.Brand
            href="http://localhost:5173/"
            src="https://i.ibb.co/qRW8DM6/hiring-8852986.png"
            alt="Logo"
            name="EasyRecruit"
          />
        </div>

        <p className='text-center text-sm'>Simplify Hiring, <span className='text-purple-500'>Amplify Results</span></p>
        <Footer.Divider />



        {/* Navigation Links */}
        <div className="col-span-1 md:col-span-2 grid lg:grid-cols-4 gap-8 p-5 ml-20">

          <div>
            <Footer.Title className='text-black font-bold text-xl ml-5' title="Developers Profile" />
            <div className='mr-10'>
              <div className="grid grid-cols-3 gap-2">
                {developers.map(developer => (
                  <div key={developer.id} className="relative text-center group">
                    <img
                      src={developer.avatar}
                      alt={developer.name}
                      className="w-12 h-12 rounded-full mx-auto mb-2 cursor-pointer transition-opacity duration-300 group-hover:opacity-50"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a href={developer.Profile} target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-sm p-2 rounded-md bg-gray-800 hover:bg-gray-700">{developer.name}</a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div>

            <Footer.Title className='text-black font-bold text-xl' title="Our Blogs" />
            <Footer.LinkGroup col className=''>
              <Footer.Link className='hover:text-pink-500' target="_blank" rel="noopener noreferrer"  href="https://medium.com/@fasunan">Blog About Tech</Footer.Link>
              <Footer.Link className='hover:text-pink-500' href="#">Blog About "ATS Website"</Footer.Link>
              <Footer.Link className='hover:text-pink-500' href="#">Blog About Hiring Process</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-black font-bold text-xl' title="About" />
            <Footer.LinkGroup col className=''>
              <Link to={"whyEasyRecruit"} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Why Choose Us</Link>
              <Link to={"about"} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Our Team</Link>
              <Link to={"/"} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Contact Us</Link>
              
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title className='text-black font-bold text-xl' title="Company" />
            <Footer.LinkGroup col className=''>
              {/* <Link to={"privacy"} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Privacy Policy</Link>
              <Link to={"terms"} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Terms &amp; Conditions</Link> */}
              <Link to={"/"} className='hover:text-pink-500'>Careers</Link>
              <Link to={"/"} className='hover:text-pink-500'>Customers</Link>
              <Link to={"/"}  className='hover:text-pink-500'>Case Studies</Link>

            </Footer.LinkGroup>
          </div>
        </div>
        {/* Divider */}
        <Footer.Divider />

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between m-5">
          {/* Copyright */}
          <Footer.Copyright href="#" by="easyRecruit™" year={2024} />
          <Footer.LinkGroup col className=''>
              <Link to={"privacy"} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Privacy Policy</Link>
              
            </Footer.LinkGroup>
          <Footer.LinkGroup col className=''>
          <Link to={"terms"} target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Terms &amp; Conditions</Link>
              
            </Footer.LinkGroup>

          {/* Social Icons */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Footer.Icon href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" icon={BsFacebook} className="text-blue-500 hover:text-blue-600" />
            <Footer.Icon href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" icon={BsInstagram} className="text-pink-500 hover:text-pink-600" />
            <Footer.Icon href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" icon={BsTwitter} className="text-blue-400 hover:text-blue-500" />
            <Footer.Icon href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" icon={BsGithub} className="text-gray-800 hover:text-gray-900" />
            <Footer.Icon href="https://dribbble.com/yourusername" target="_blank" rel="noopener noreferrer" icon={BsDribbble} className="text-pink-600 hover:text-pink-700" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
