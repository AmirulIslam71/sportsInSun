import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

const EnrolledClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolledClass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(enrolledClass);

  return (
    <div className="w-full h-full">
      <div className="bg-gradient-to-r from-black to-red-950 py-8 px-2">
        <SectionTitle heading={"My Enrolled Classes"}></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-2 container mx-auto">
          {enrolledClass.map((singleClass) => (
            <div
              key={singleClass?._id}
              className={`card card-compact text-white shadow-xl mb-6 ${
                singleClass?.availableSeats === 0 ? "bg-red-500" : ""
              }`}
            >
              <figure>
                <img
                  src={singleClass?.image}
                  className="w-full h-80"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body bg-slate-700">
                <h2 className="card-title">{singleClass?.name}</h2>
                <h2 className="card-title">
                  <span className="font-bold text-lime-400">
                    Instructor Name :
                  </span>{" "}
                  {singleClass?.instructorName}
                </h2>
                <div className="space-y-2 text-lg">
                  <p>
                    <span className="font-semibold text-lime-400">
                      Available Seats :
                    </span>{" "}
                    <span className="text-red-400 font-semibold">
                      {" "}
                      {singleClass?.availableSeats}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-lime-400">Price :</span>{" "}
                    <span className="text-red-400 font-semibold">
                      $ {singleClass?.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
