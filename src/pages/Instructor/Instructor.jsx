import { useQuery } from "@tanstack/react-query";
import { Parallax } from "react-parallax";

const Instructor = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });
  console.log(instructors);

  return (
    <div>
      <Parallax
        blur={{ min: -60, max: 60 }}
        bgImage={"https://i.ibb.co/D1RQXJq/fitness-plus-trainers-1.jpg"}
        bgImageAlt="the menu"
        strength={-200}
        className=""
      >
        <div className="hero h-[400px] bg-black opacity-50">
          <div className="hero-content text-center text-neutral-content w-2/4 ">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold  uppercase">our team</h1>
              <p className="text-2xl">
                Home - <span className="text-amber-200">Instructor</span>
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="bg-gradient-to-r from-black to-red-950 py-8 px-2">
        <h5 className="text-orange-600 text-2xl uppercase">Our Team</h5>
        <h2 className="text-white text-5xl uppercase">Train with Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card card-compact w-96 text-white shadow-xl mb-6"
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
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    See Classes Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
