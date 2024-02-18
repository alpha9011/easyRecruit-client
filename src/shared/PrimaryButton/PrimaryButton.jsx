const PrimaryButton = ({buttonText, link}) => {
  return (
    <div className="flex  gap-10">
      <a href={link} className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#139BFF] transition-colors duration-300 ease-out border-2 border-[#139BFF] group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3  bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#139BFF] group-hover:-rotate-180 ease"></span>
          <span className="relative">{buttonText}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#139BFF] group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>
    </div>
  );
};

export default PrimaryButton;
