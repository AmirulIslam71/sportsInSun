import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  // const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    const gender = data.gender;
    const phone = data.phone;
    const address = data.address;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const saveUser = { name, email, photo, gender, phone, address };
        updateUserProfile(name, photo)
          .then(() => {
            axios.post("http://localhost:5000/users", saveUser).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Create successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(from, { replace: true });
                reset();
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>SportsInSun-register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl text-center mb-4 font-bold">
              Register now!
            </h1>
            <img
              src="https://i.ibb.co/r6ShGCY/si-advanced-authentication-feature.jpg"
              alt=""
            />
          </div>
          <div className="card w-1/2 bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Enter Your Name"
                      className="input input-bordered"
                    />
                    {errors.name && (
                      <span className="text-red-500">Name is required</span>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      {...register("photo", { required: true })}
                      placeholder="Enter your photo Url"
                      className="input input-bordered"
                    />
                    {errors.photo && (
                      <span className="text-red-500">
                        Photo url is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                      placeholder="Enter your email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                      })}
                      placeholder="Enter your password"
                      className="input input-bordered"
                    />
                    {errors.password?.type === "required" && (
                      <span className="text-red-500">Password is required</span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500">
                        Password must be 6 characters
                      </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-500">
                        Password must be less 20 characters
                      </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-500">
                        Password must be less 20 characters
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-500">
                        Password must one uppercase, one lowercase one special
                        characters.
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      placeholder="Confirm your password"
                      className="input input-bordered"
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Gender</span>
                    </label>
                    <select
                      defaultValue={"Gender"}
                      {...register("gender", {
                        required: true,
                        maxLength: 120,
                      })}
                      className="select select-bordered"
                    >
                      <option disabled>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                    {errors.gender && (
                      <span className="text-red-500">Gender is required</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      {...register("phone", {
                        required: true,
                        minLength: 10,
                        maxLength: 13,
                      })}
                      placeholder="Enter phone number"
                      className="input input-bordered"
                    />
                    {errors.phone && (
                      <span className="text-red-500">
                        Phone number is required
                      </span>
                    )}
                    {errors.phone?.type === "minLength" && (
                      <span className="text-red-500">
                        phone number must be 10 digits
                      </span>
                    )}
                    {errors.phone?.type === "maxLength" && (
                      <span className="text-red-500">
                        phone number must be 13 digits
                      </span>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      {...register("address", {
                        required: true,
                        maxLength: 50,
                      })}
                      placeholder="Enter Address"
                      className="input input-bordered"
                    />
                    {errors.address && (
                      <span className="text-red-500">Address is required</span>
                    )}
                  </div>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-orange-600"
                    type="submit"
                    value="Register"
                  />
                  {error && <span className="text-red-500 mt-2">{error}</span>}
                </div>
                <p className="py-3">
                  Already registered? Go to{" "}
                  <Link to="/login" className="text-red-500 text-xl">
                    Log In
                  </Link>
                </p>
              </form>
              <div className="space-y-0 px-2">
                <div className="divider"></div>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
