import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useSelect from "../../../hooks/useSelect";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectClasses = () => {
  const [selectedClass, refetch] = useSelect();
  //   const totalPrice = selectedClass.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/selectedClass/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-black to-red-950 w-full h-full p-5">
      <SectionTitle
        heading={"Manage all Selected Classes"}
        subHeading={""}
      ></SectionTitle>
      <div className="overflow-x-auto bg-white p-2 mt-6">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-2xl ">Select Classes : {selectedClass.length}</h1>
          {/* <h1 className="text-2xl">Total Price: ${totalPrice}</h1> */}
        </div>
        <table className="table">
          <thead className="bg-amber-700 text-white text-lg">
            <tr>
              <th>#</th>
              <th>Image-- Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((classes, index) => (
              <tr key={classes?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classes?.image} alt="User Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classes?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{classes?.instructorName}</td>
                <td className="">{classes?.availableSeats}</td>
                <td className="">${classes?.price}</td>
                <td>
                  <Link to={`/dashboard/payment?classId=${classes._id}`}>
                    <button className="p-3 rounded uppercase bg-amber-400">
                      Pay
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(classes._id)}
                    className="p-3 rounded bg-red-600 text-white"
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

export default SelectClasses;
