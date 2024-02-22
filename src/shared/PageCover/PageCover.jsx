import { Parallax } from "react-parallax";

// eslint-disable-next-line react/prop-types
const PageCover = ({ img, title, desc }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            strength={-200}
            className="bg-cover"
        >
            <div className="h-[91vh]">
                <div className="bg-opacity-60"></div>
                <div className="max-w-screen-md mx-auto h-full text-center flex justify-center items-center">
                    <div className="w-full px-4 md:px-5">
                        <h1 className="mb-5 text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-fuchsia-400 inline-block text-transparent bg-clip-text">{title}</h1>
                        <p className="mb-5 font-medium bg-gradient-to-r from-fuchsia-400 to-yellow-400 inline-block text-transparent bg-clip-text">{desc}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default PageCover;