import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = (event) => {
    event.preventDefault();
    const captchaValue = event.target.value;
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("Captcha not match");
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>SportsInSun-login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-3/4 lg:text-left">
            <h1 className="text-5xl text-center mb-4 font-bold">Login now!</h1>
            <img
              src="https://i.ibb.co/Rpj5w1X/User-Authentication-Understanding-the-Basics-Top-Tips.jpg"
              alt=""
            />
          </div>
          <div className="card w-1/2 bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleCaptcha}
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disabled}
                    className="uppercase btn bg-orange-600"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p className="">
                  Don`t have an Account? Go to{" "}
                  <Link to="/register" className="text-xl text-red-400">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <div className="space-y-0 px-8 pb-2">
              <div className="divider"></div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
