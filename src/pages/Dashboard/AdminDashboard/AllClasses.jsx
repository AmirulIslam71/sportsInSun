import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";
import { useState } from "react";
import Swal from "sweetalert2";
import FeedBackModal from "./FeedBackModal";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classes] = useClasses();
  const [disableButtons, setDisableButtons] = useState(false);

  const { data: pending = [], refetch } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allClasses");
      return res.data;
    },
  });

  const handleUpdate = (id, status) => {
    fetch(`http://localhost:5000/classes/${status}/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Classes is now a ${status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
        setDisableButtons(false);
      })
      .catch((error) => {
        console.log(error);
        setDisableButtons(false);
      });
  };

  return (
    <div className="bg-gradient-to-r from-black to-red-950 w-full h-full p-5">
      <SectionTitle
        heading={"Manage all Classes"}
        subHeading={""}
      ></SectionTitle>
      <div className="overflow-x-auto bg-white p-2 mt-6">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-2xl ">Pending Classes : {pending?.length}</h1>
        </div>
        <table className="table">
          <thead className="bg-amber-700 text-white text-lg">
            <tr>
              <th>#</th>
              <th>Image-- Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
            </tr>
          </thead>
          <tbody>
            {pending.map((singleClasses, index) => (
              <tr key={singleClasses?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClasses?.image} alt="User Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{singleClasses?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{singleClasses?.instructorName}</td>
                <td className="">{singleClasses?.availableSeats}</td>
                <td className="">${singleClasses?.price}</td>
                <td className="uppercase">{singleClasses?.status}</td>
                <td>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        handleUpdate(singleClasses?._id, "approve")
                      }
                      className="p-3 rounded bg-green-600 text-white"
                      disabled={disableButtons}
                    >
                      Approve
                    </button>
                  </div>
                </td>
                <td>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleUpdate(singleClasses?._id, "deny")}
                      className="p-3 rounded bg-red-600 text-white"
                      disabled={disableButtons}
                    >
                      Deny
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <FeedBackModal />
      </div>
      <div className="overflow-x-auto bg-white p-2">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-2xl ">Approve Classes : {classes?.length}</h1>
          {/* <h1 className="text-2xl">Total Price: ${totalPrice}</h1> */}
        </div>
        <table className="table">
          <thead className=" text-white text-lg">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClasses, index) => (
              <tr key={singleClasses?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClasses?.image} alt="User Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{singleClasses?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{singleClasses?.instructorName}</td>
                <td className="">{singleClasses?.availableSeats}</td>
                <td className="">${singleClasses?.price}</td>
                <td className="uppercase">{singleClasses?.status}</td>
                <td>
                  {/* <div className="flex items-center">
                    <button
                      //   onClick={() => handleUpdate(user._id, "approve")}
                      className="p-3 rounded bg-green-600 text-white"
                      //   disabled={disableButtons}
                    >
                      Approve
                    </button>
                  </div> */}
                </td>
                <td>
                  {/* <div className="flex items-center">
                    <button
                      //   onClick={() => handleUpdate(user._id, "Instructor")}
                      className="p-3 rounded bg-red-600 text-white"
                      //   disabled={disableButtons}
                    >
                      Deny
                    </button>
                  </div> */}
                </td>
                <td>
                  {/* <div className="flex items-center">
                    <button
                      //   onClick={() => handleUpdate(user._id, "Instructor")}
                      className="p-3 rounded bg-blue-600 text-white"
                      //   disabled={disableButtons}
                    >
                      FeedBack
                    </button>
                  </div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
