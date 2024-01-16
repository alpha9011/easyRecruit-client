import { Button, FloatingLabel } from "flowbite-react";
import bannerImg from "../../../assets/banner img.png";

const Banner = () => {
  return (
    <div className="container mx-auto relative border h-80vh" > 
    <div className="flex justify-center text-5xl ">
        <h1>Website title </h1>
    </div>

    <div className="">
        <img src={bannerImg} alt="" />
      </div>
       
      <div className="absolute  top-1/2 left-1/2 flex">
        <input type="text" className=" " placeholder="text here " />

        <Button outline className="rounded-none" gradientDuoTone="pinkToOrange">
          SEARCH
        </Button>
      </div>
      
    </div>
  );
};

export default Banner;
