
import Education from "./Education";
import Experience from "./Experience";
import UploadCV from "./UploadCV";

const CVmanage = () => {
    return (
        <div className="text-white p-10 space-y-8">
            <UploadCV/>
            <Education/>
            <Experience/>
        </div>
    );
};

export default CVmanage;