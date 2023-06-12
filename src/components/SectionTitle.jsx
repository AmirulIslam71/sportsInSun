import { Fade, Slide } from "react-awesome-reveal";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="uppercase text-center space-y-4">
      <Fade delay={1e3} cascade damping={1e-1}>
        <h5 className="text-lg text-orange-500">{subHeading}</h5>
      </Fade>
      <Slide>
        <h1 className="text-xl lg:text-4xl md:text-2xl text-amber-800">
          {heading}
        </h1>
      </Slide>
    </div>
  );
};

export default SectionTitle;
