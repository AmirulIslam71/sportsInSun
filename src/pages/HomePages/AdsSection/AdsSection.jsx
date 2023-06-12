import SectionTitle from "../../../components/SectionTitle";
import { Slide } from "react-awesome-reveal";

const AdsSection = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        heading={"push your limits forward"}
        subHeading={"why choose us?"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-2">
        <div className="card bg-green-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/tZnRZYq/equipemtn.jpg"
              alt="Shoes"
              className="rounded-full w-24 h-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Slide>
              <h2 className="card-title">Modern Equipment</h2>
            </Slide>
            <p className="text-xs opacity-90">
              Modern equipment revolutionizes industries and enhances
              productivity with advanced technologies, streamlining processes
              and delivering unprecedented efficiency.
            </p>
          </div>
        </div>
        <div className="card  bg-green-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/dbZysPK/plan.jpg"
              alt="Shoes"
              className="rounded-full w-24 h-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Slide>
              <h2 className="card-title">Healthy nutrition plan</h2>
            </Slide>
            <p className="text-xs opacity-90">
              A healthy nutrition plan plays a crucial role in maintaining
              overall well-being, providing essential nutrients and promoting
              optimal physical and mental health.
            </p>
          </div>
        </div>
        <div className="card  bg-green-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/ZzhDnQ7/training.jpg"
              alt="Shoes"
              className="rounded-full w-24 h-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Slide>
              <h2 className="card-title">Professional training plan </h2>
            </Slide>
            <p className="text-xs opacity-90">
              A professional training plan is a structured and comprehensive
              program designed to enhance skills, knowledge, and performance in
              a specific field, enabling individuals to excel and succeed in
              their professional endeavors.
            </p>
          </div>
        </div>
        <div className="card  bg-green-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/Chjm3LQ/unique.jpg"
              alt="Shoes"
              className="rounded-full w-24 h-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Slide>
              <h2 className="card-title">Unique to your needs</h2>
            </Slide>
            <p className="text-xs opacity-90">
              Tailored to individual requirements, a unique approach ensures
              that solutions, products, or services are customized to meet
              specific needs, enhancing effectiveness and delivering optimal
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
