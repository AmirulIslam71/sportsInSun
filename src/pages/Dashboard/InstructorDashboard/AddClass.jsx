import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imageHostingToken = import.meta.env.VITE_Hosting_Token;

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingToken}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageUrl = imageResponse.data.display_url;
          const { name, seats, price } = data;
          const newClass = {
            name,
            availableSeats: parseInt(seats),
            price: parseFloat(price),
            instructorName: user?.displayName,
            email: user?.email,
            image: imageUrl,
            status: "pending",
            enrolled: 0,
          };
          console.log(newClass);
          axiosSecure.post("/classes", newClass).then((data) => {
            console.log(data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-black to-red-950 w-full h-full p-5">
      <SectionTitle heading={"Add Class here"} subHeading={""}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 mx-auto">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Class Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 120 })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Instructor Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Instructor Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white">Available Seats</span>
          </label>
          <input
            type="number"
            {...register("seats", { required: true, maxLength: 10 })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text text-white">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true, maxLength: 10 })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <input
          type="file"
          {...register("image", { required: true, maxLength: 120 })}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <br />
        <div className="btn bg-pink-800 text-white mt-4">
          <input type="submit" value="Add Class" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
