import { FileInput, Label } from "flowbite-react";

const UploadCV = () => {
    return (
        <div>
            <h1 className="text-4xl mb-4">My Resume</h1>
            <div className="bg-white border-dashed p-16 rounded-lg">
                <div id="fileUpload" className="max-w-md ">
                    <div className="mb-6 block">
                        <Label className="text-3xl" htmlFor="file" value="Update Your CV" />
                    </div>
                    <FileInput id="file" className="mt-4" helperText="You Can upload your cv for apply to the job" />
                </div>
            </div>
        </div>
    );
};

export default UploadCV;