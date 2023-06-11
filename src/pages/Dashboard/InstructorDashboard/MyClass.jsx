import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMyClass from "../../../hooks/useMyClass";
import UpdateModal from "./UpdateModal";
import { useState } from "react";

const MyClass = () => {
  const [myClass] = useMyClass();
  const [updateClass, setUpdateClass] = useState(null);

  const handleUpdate = (classes) => {
    window.my_modal_5.showModal();
    setUpdateClass(classes);
  };

  return (
    <div className="bg-gradient-to-r from-black to-red-950 w-full h-full p-5">
      <SectionTitle heading={"Mange My all class"}></SectionTitle>
      <div className="overflow-x-auto bg-white p-2 mt-6">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-2xl ">My Classes :{myClass.length}</h1>
          {/* <h1 className="text-2xl">Total Price: ${totalPrice}</h1> */}
        </div>
        <table className="table">
          <thead className="bg-amber-700 text-white text-lg">
            <tr>
              <th>#</th>
              <th>Image-- Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Students</th>
              <th>FeedBack</th>
              <th>Update</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((classes, index) => (
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
                <td>{classes?.availableSeats}</td>
                <td className="">${classes?.price}</td>
                <td className="">{classes?.enrolled}</td>
                <td className="">{classes?.feedback}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(classes)}
                    className="p-3 rounded bg-amber-600 text-white"
                  >
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td className="uppercase">{classes?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <UpdateModal updateClass={updateClass}></UpdateModal>
      </div>
    </div>
  );
};

export default MyClass;
