import { useForm } from "react-hook-form";
import useMyClass from "../../../hooks/useMyClass";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateModal = ({ updateClass }) => {
  const { register, handleSubmit } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const [, refetch] = useMyClass();

  const onSubmit = (data) => {
    const { name, seats, price } = data;
    const updatedClass = {
      name,
      availableSeats: parseInt(seats),
      price: parseFloat(price),
    };

    axiosSecure
      .put(`/classes/${updateClass._id}`, updatedClass)
      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box"
        >
          <h1 className="text-center text-xl font-bold">Update A Class</h1>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              defaultValue={updateClass?.name}
              {...register("name", { required: true, maxLength: 120 })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              defaultValue={updateClass?.availableSeats}
              {...register("seats", { required: true, maxLength: 10 })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              defaultValue={updateClass?.price}
              {...register("price", { required: true, maxLength: 10 })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <input
            type="submit"
            value="Update Class"
            className="bg-pink-800 mt-4 btn text-white"
          />
        </form>
      </dialog>
    </div>
  );
};

export default UpdateModal;
