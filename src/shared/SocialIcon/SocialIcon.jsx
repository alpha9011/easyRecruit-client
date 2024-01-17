import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const SocialIcon = () => {
    return (
        <div>
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 p-4 bg-gray-800 text-white">
      {/* Social Icons */}
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={20} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} />
      </a>
      
      <a href="mailto:your@email.com" rel="noopener noreferrer">
        <FiMail size={20} />
      </a>
    </div>
        </div>
    );
};

export default SocialIcon;