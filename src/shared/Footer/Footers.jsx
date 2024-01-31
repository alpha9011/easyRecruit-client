import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footers = () => {
  return (
    <Footer container>
      <div className="w-full mx-auto p-7 bg-black text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo */}
          <div className="col-span-1 md:col-span-1">
            <Footer.Brand
              href="http://localhost:5173/"
              src="https://i.ibb.co/qRW8DM6/hiring-8852986.png"
              alt="Logo"
              name="easyRecruit"
            />
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {/* About Section */}
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">easyRecruit</Footer.Link>
                <Footer.Link href="#">Our Team</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal Section */}
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider />

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <Footer.Copyright href="#" by="easyRecruit™" year={2024} />

          {/* Social Icons */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
