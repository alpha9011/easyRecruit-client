import CandidateForm from "./CandidateForm";


const ApplyForm = () => {
   
    return (
        <div>
            {/* company details */}
            <div>
                <h1 className="text-2xl font-semibold">Finance Director</h1>
                <div className="flex gap-3">
                <span> San Francisko</span>
                <span>Full time</span>
                <span>Finance </span>
                <span>Executive </span>
                </div>
            </div>

            {/* post details and form */}

            <div className="grid grid-cols-2 gap-5">
                {/* post details */}
                <div>
                    <h1>About Health</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente enim ex temporibus atque quae, dolores fugiat placeat corrupti. Optio ipsum maiores cum officia mollitia, necessitatibus laudantium error voluptate corporis.</p>

                    <h1>Position summary</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus sed distinctio earum accusantium at quia deleniti? Soluta vel quos consequuntur, est laboriosam possimus error illum culpa illo facilis natus.</p>

                    <h1>Responsibilities</h1>
                    <ul>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    </ul>

                    <h1>Qualification</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>

                    <h1>Education and experience</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>

                {/* apply form */}
                <div>
                    <h1>Apply for this position</h1>
                    <CandidateForm></CandidateForm>

                </div>
            </div>
        </div>
    )
}
export default ApplyForm;