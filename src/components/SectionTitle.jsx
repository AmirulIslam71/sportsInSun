const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="uppercase text-center space-y-4">
      <h5 className="text-lg text-orange-500">{subHeading}</h5>
      <h1 className="text-xl lg:text-4xl md:text-2xl text-white">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
