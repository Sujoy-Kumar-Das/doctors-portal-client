import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../../contexts/authContext/AuthContextProvider";
import { Link } from "react-router-dom";

const ResetPass = () => {
    const {resetPassword} = useContext(AuthProvider);
    const [error,setError] = useState("")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleResetPass = (data,event) => {
    resetPassword(data.email)
    .then(()=>{
        alert("Please Check Your Email !")
        setError("")
        event.reset();
    })
    .catch(error=>setError(error.message))
  };
  return (
    <div className="h-[270px] flex justify-center items-center">
      <form className=" w-80 lg:w-96" onSubmit={handleSubmit(handleResetPass)}>
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
        <label className="label">
            
          </label>
          {error &&   <label className="label">
          <span className="label-text">
            <span className="label-text text-error">{error} </span> <span className=" text-primary">go for</span> 
            <Link to={"/singup"} className=" btn-link">Create a new account</Link>
          </span>
        </label>}
        <input
          className="w-full btn btn-accent text-white mt-5"
          type="submit"
          value="Reset now"
        />
      </form>
    </div>
  );
};

export default ResetPass;
