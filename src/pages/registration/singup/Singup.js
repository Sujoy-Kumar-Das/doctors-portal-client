import React, { useContext, useState } from "react";
import Social from "../socialLogin/Social";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../../contexts/authContext/AuthContextProvider";
import { toast } from "react-hot-toast";
import UseJWT from "../../../hookes/UseJWT";

const Singup = () => {
  const { createUser, updateUser } = useContext(AuthProvider);
  const [error, setError] = useState("");
  const [userEmail,setUserEmail] = useState("")
  const [token] = UseJWT(userEmail)
  const navigate = useNavigate();
  if(token){
    navigate("/")
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSingup = (data, event) => {
    const userInfo = { displayName: data.name };
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        updateUser(userInfo)
          .then(() => {
            storeUser(data.name, data.email);
            
            event.target.reset();
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };
  const storeUser = (name, email) => {
    const userInfo = {
      name,
      email,
    };
    fetch(`http://localhost:5000/storeUser?email=${email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setUserEmail(email)
          setError("");
        } else {
          toast.error(data.message);
        }
      });
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
                minLength: {
                  value: 8,
                  message: "Your password minimum 8 charecter long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className=" text-error">{errors.password?.message}</p>
            )}
            {error && <p>{error}</p>}
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
