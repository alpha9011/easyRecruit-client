import { Datepicker, Label, Textarea } from "flowbite-react";

const Education = () => {
    return (
        <div className="bg-white text-gray-600 p-8 rounded-lg">
            <h2 className="text-3xl mb-4">Education</h2>
            <div className="flex  gap-20 justify-center">
                <div className="flex-1">
                    <p>From</p>
                    <Datepicker className="" />
                </div>

                <div className="flex-1">
                    <p>To</p>
                    <Datepicker />
                </div>
            </div>

            <div className="w-full ">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Description" />
      </div>
      <Textarea className="py-8" id="comment" placeholder=" Product Designer - Spotify Inc." required rows={4} />
    </div>

    <button className="px-4 py-2 rounded-lg bg-blue-600 my-4 text-white">Add Timeline</button>

    <div className="flex mt-4 gap-12">
        <p className="  py-8">2008-2012</p>
        <div className="border-r-2"></div>
       <div className="">
       <h3 className="text-2xl font-semibold">National Design Academy</h3>
        <p> dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum <br /> primis in faucibus. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
       </div>
    </div>

    <div className="flex mt-4 gap-12">
        <p className="  py-8">2012-2014</p>
        <div className="border-r-2"></div>
       <div className="">
       <h3 className="text-2xl font-semibold">University of Oxford</h3>
        <p> dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum <br /> primis in faucibus. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
       </div>
    </div>

    <div className="flex mt-4 gap-12">
        <p className="  py-8">2014-2016</p>
        <div className="border-r-2"></div>
       <div className="">
       <h3 className="text-2xl font-semibold">California Institute of Technology</h3>
        <p> dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum <br /> primis in faucibus. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
       </div>
    </div>

    <div className="flex mt-4 gap-12">
        <p className="  py-8">2016-NOW</p>
        <div className="border-r-2"></div>
       <div className="">
       <h3 className="text-2xl font-semibold">Stanford University</h3>
        <p> dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum <br /> primis in faucibus. Proin a ipsum tellus.  Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
       </div>
    </div>

        </div>
    );
};

export default Education;