import { Parallax } from "react-parallax";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");
      return res.json();
    },
  });
  console.log(classes);

  return (
    <div>
      <Parallax
        blur={{ min: -60, max: 60 }}
        bgImage={"https://i.ibb.co/2tc6vSJ/classes2.jpg"}
        bgImageAlt="the menu"
        strength={-200}
        className=""
      >
        <div className="hero h-[400px] bg-black opacity-50">
          <div className="hero-content text-center text-neutral-content w-2/4 ">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold  uppercase">
                our classes
              </h1>
              <p className="text-2xl">
                Home - <span className="text-amber-200">Classes</span>
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="bg-gradient-to-r from-black to-red-950 py-8 px-2">
        <SectionTitle
          heading={"Continue your Classes with Experts"}
          subHeading={"Our Services"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {classes.map((singleClass) => (
            <div
              key={singleClass._id}
              className="card card-compact w-96 text-white shadow-xl mb-6"
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
                    <span className="font-semibold text-lime-400">Price :</span>{" "}
                    <span className="text-red-400 font-semibold">
                      $ {singleClass.price}
                    </span>
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

export default Classes;
