import { Parallax } from "react-parallax";
import SectionTitle from "../../components/SectionTitle";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const [selectedClassId, setSelectedClassId] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");
      return res.json();
    },
  });

  const handleSelected = (singleClass) => {
    if (user) {
      axios
        .post("http://localhost:5000/selectedClass", singleClass)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class has been selected",
              showConfirmButton: false,
              timer: 1500,
            });
            setSelectedClassId(singleClass._id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be selected class. Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

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
                  <button
                    onClick={() => handleSelected(singleClass)}
                    className={`btn btn-primary ${
                      selectedClassId === singleClass._id ? "disabled" : ""
                    }`}
                    disabled={selectedClassId === singleClass._id}
                  >
                    {selectedClassId === singleClass._id
                      ? "Class Selected"
                      : "Select Class"}
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
