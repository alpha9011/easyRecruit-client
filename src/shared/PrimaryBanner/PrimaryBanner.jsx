

const PrimaryBanner = ({imageUrl, bgSize ='cover', position='center'}) => {
const backgroundStyle ={
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: bgSize, // cover, fit etc
    backgroundPosition: position,
    backgroundRepeat : "no-repeat",
    height:"100vh"
}
    return (
        <div className="" style={backgroundStyle}>
        </div>
    );
};

export default PrimaryBanner;