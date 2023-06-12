import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Popular = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        "https://sports-in-sun-server.vercel.app/classes/popular"
      );
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        subHeading={"Our Popular Classes"}
        heading={"WHAT WE CAN OFFER"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-2 container mx-auto">
        <Fade cascade>
          {classes.map((singleClass) => (
            <div
              key={singleClass._id}
              className="card card-compact text-white shadow-xl mb-6"
            >
              <figure>
                <img
                  src={singleClass.image}
                  className="w-full h-80"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body bg-slate-700 ">
                <h2 className="card-title">{singleClass.name}</h2>
                <h2 className="card-title">
                  <span className="font-bold text-lime-400">
                    Instructor Name :
                  </span>{" "}
                  {singleClass.instructorName}
                </h2>
                <div className="space-y-2 text-lg">
                  <p>
                    <span className="font-semibold text-lime-400">
                      Available Seats :
                    </span>{" "}
                    <span className="text-red-400 font-semibold">
                      {" "}
                      {singleClass.availableSeats}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-lime-400">
                      Enrolled :
                    </span>{" "}
                    <span className="text-red-400 font-semibold">
                      {" "}
                      {singleClass.enrolled}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-lime-400">Price :</span>{" "}
                    <span className="text-red-400 font-semibold">
                      $ {singleClass.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <div className="text-center mb-5">
        <Link to="/classes">
          <button className="bg-emerald-600 text-white uppercase p-2 text-center rounded">
            See All Classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Popular;
