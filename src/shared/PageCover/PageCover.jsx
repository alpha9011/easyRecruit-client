import { Parallax } from "react-parallax";

// eslint-disable-next-line react/prop-types
const PageCover = ({ img, title, desc }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            strength={200}
        >
            <div className="h-[500px] pt-32">
                <div className="bg-opacity-60"></div>
                <div className="text-center text-white flex justify-center items-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text">{title}</h1>
                        <p className="mb-5 font-medium bg-gradient-to-r from-[#00d2ff] to-[#928DAB] inline-block text-transparent bg-clip-text">{desc}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default PageCover;