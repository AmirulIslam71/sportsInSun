import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const AllUsers = () => {
  const [disableButtons, setDisableButtons] = useState(false);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  const handleUpdate = (userId, role) => {
    setDisableButtons(true);

    fetch(`http://localhost:5000/users/${role}/${userId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${userId} is now a ${role}!`,
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-black to-red-950 w-full h-full p-5">
      <SectionTitle heading={"Manage All users"} subHeading={""}></SectionTitle>
      <div className="overflow-x-auto bg-white p-2 mt-6">
        <h1 className="text-2xl py-4">Users Number : {users.length}</h1>
        <table className="table">
          <thead className="bg-amber-700 text-white">
            <tr>
              <th>#</th>
              <th>Information</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Current Role</th>
              <th className="text-center">Change Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.photo} alt="User Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-90">{user?.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.gender}</td>
                <td className="">{user?.phone}</td>
                <td className="">{user?.role}</td>
                <td>
                  {user.role && (
                    <div className="flex items-center">
                      <button
                        onClick={() => handleUpdate(user._id, "Instructor")}
                        className="p-3 rounded bg-green-600 text-white"
                        disabled={disableButtons}
                      >
                        Make Instructor
                      </button>
                      <button
                        onClick={() => handleUpdate(user._id, "Admin")}
                        className="p-3 rounded bg-blue-600 text-white ml-2"
                        disabled={disableButtons}
                      >
                        Make Admin
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="p-3 rounded bg-red-600 text-white"
                    disabled={disableButtons}
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
