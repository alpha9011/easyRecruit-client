const PrimaryBanner = ({
  imageUrl,
  bgSize = "cover",
  position = "center",
  imgHeight = "100vh",
}) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: bgSize, // cover, fit etc
    backgroundPosition: position,
    backgroundRepeat: "no-repeat",
    height: imgHeight,
  };
  return (
    <div className="grid justify-center items-center" style={backgroundStyle}>
      <div className="text-white flex  justify-center items-center flex-col space-y-5">
        <h1 className="text-4xl font-bold ">Great hiring starts here</h1>
        <p>
          Recruiting software that gives you the power you need to find & hire
          the best talent.
        </p>
        <button className="btn ">See EasyRecruit In Action</button>
      </div>
    </div>
  );
};

export default PrimaryBanner;
