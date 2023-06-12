import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const PopularInstructor = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axios.get(
        "https://sports-in-sun-server.vercel.app/instructors/popular"
      );
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading={"Train with Experts"}
        subHeading={"Our popular team"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-2 container mx-auto">
        <Fade damping={0.1}>
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card card-compact text-white shadow-xl mb-6"
            >
              <figure>
                <img
                  src={instructor.image}
                  className="w-full h-80"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body bg-slate-700 ">
                <h2 className="card-title">
                  <span className="font-bold">Instructor :</span>{" "}
                  {instructor.name}
                </h2>
                <div className="space-y-2 text-lg">
                  <p>
                    <span className="font-semibold">Email :</span>{" "}
                    {instructor.email}
                  </p>
                  <p>
                    <span className="font-semibold">Student :</span>{" "}
                    <span className="text-red-400 font-semibold">
                      {instructor.student}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Number of Classes :</span>{" "}
                    <span className="text-red-400 font-semibold">
                      {instructor.numClassesTaken}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Name of Classes -</span>{" "}
                    {instructor.classesTaken.map((classes, index) => (
                      <li key={index} className="">
                        {classes}
                      </li>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <div className="text-center mb-5">
        <Link to="/instructor">
          <button className="bg-emerald-600 text-white uppercase p-2 text-center rounded">
            See All instructors
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructor;
