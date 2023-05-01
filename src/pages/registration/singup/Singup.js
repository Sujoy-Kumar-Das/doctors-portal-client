import React from "react";
import Social from "../socialLogin/Social";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Singup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSingup = (data, event) => {
    event.target.reset();
    console.log(data);
  };
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className=" w-80 lg:w-96">
        <h3 className=" text-2xl font-bol text-center">Singup</h3>
        <form onSubmit={handleSubmit(handleSingup)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className=" text-error">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Please enter your email" })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className=" text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Please enter your password",
                minLength:{value:8,message:"Your password minimum 8 charecter long"},
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className=" text-error">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="w-full btn btn-accent text-white mt-5"
            type="submit"
            value="Login"
          />
        </form>
        <label className="label">
          <span className="label-text">
            Already have an account ?{" "}
            <Link to={"/login"} className=" btn-link">
              Login
            </Link>
          </span>
        </label>
        <div className="divider">OR</div>
        <Social></Social>
      </div>
    </div>
  );
};

export default Singup;
