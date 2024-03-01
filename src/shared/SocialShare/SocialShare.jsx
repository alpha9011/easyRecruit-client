import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";



const SocialShare = () => {

    const handleFacebookShare = () => {

        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://building-management-a5b4a.web.app/`
        window.open(facebookUrl, "popup", "width=500", "height=500", 'left=500', "top=300")
    }

    const handleTwitterShare = () => {

        const twitterUrl = `https://twitter.com/share?url=https://building-management-a5b4a.web.app/`
        window.open(twitterUrl, "popup", "width=500", "height=500", 'left=500', "top=300")
    }

    const handleLinkdinShare = () => {
        const whatsappUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://building-management-a5b4a.web.app/`
        window.open(whatsappUrl, "popup", "width=500", "height=500", 'left=500', "top=300")

    }
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    useEffect(() => {
        const container = containerRef.current;

        const handleMouseMove = (event) => {
            if (isExpanded && container && !container.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isExpanded]);

    return (
        <div ref={containerRef} className="relative">
            <button
                onClick={handleToggle}
                className="fixed left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-l-full"
            >
                {/* Arrow Icon (You can replace it with your own) */}
                <IoIosArrowForward className={`h-6 w-6 transition-transform transform ${isExpanded ? 'rotate-180' : 'rotate-0'
                    }`}></IoIosArrowForward>
            </button>

            <div
                className={`fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-row gap-4 p-4 bg-gray-300 rounded transition-all ${isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                onMouseLeave={handleMouseLeave}
            >
                {/* Social Icons */}


                <div>
                    <h1 className="text-xl font-bold text-center mb-4"><span className="flex gap-1 items-center"><FaRegShareFromSquare />with</span></h1>
                    <div className="flex-row gap-1  items-center justify-center ">
                        <div><button onClick={() => handleFacebookShare()} > <FaFacebook className="text-blue-500 text-3xl mt-1"></FaFacebook></button></div>
                        <div><button onClick={() => handleTwitterShare()} > <RiTwitterXLine className="text-3xl mt-1"></RiTwitterXLine></button></div>
                        <div><button onClick={() => handleLinkdinShare()} > <CiLinkedin className="text-blue-500 text-3xl mt-1"></CiLinkedin></button></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SocialShare;
