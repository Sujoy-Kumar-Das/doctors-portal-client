import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className=" w-80 lg:w-96">
        <h3 className=" text-2xl font-bol text-center">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input />
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              required
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              required
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
            />
          </div>
          <input
            className="w-full btn btn-accent text-white mt-5"
            type="submit"
            value="Login"
          />
        </form>
        <label className="label">
          <span className="label-text">
            New to Doctors Portal?{" "}
            <Link className=" text-secondary">Create new account</Link>
          </span>
        </label>
        <div className="divider">OR</div>
        <button className=" btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
