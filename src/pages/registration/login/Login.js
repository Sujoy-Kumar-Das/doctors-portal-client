import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../socialLogin/Social";
import { AuthProvider } from "../../../contexts/authContext/AuthContextProvider";
import UseJWT from "../../../hookes/UseJWT";

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {loginUser} = useContext(AuthProvider)
  const [currentUserEmail,setCurrentUserEmail] = useState('')
  const [token] = UseJWT(currentUserEmail)
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate()
  if(token){
    navigate(from,{replace:true})
  }
  const handleLogin = (data,event) =>{
    loginUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      
      setCurrentUserEmail(data.email)
      event.target.reset();
    })
    .catch(error=>console.log(error))
    
    console.log(data)
  }
  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className=" w-80 lg:w-96">
        <h3 className=" text-2xl font-bol text-center">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email",{required:"Please enter your email"})}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            {errors.email && <p className=" text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password",{required:"Please enter your password"})}
              
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
            />
            {errors.password && <p className=" text-error">{errors.password?.message}</p>}
          </div>
          <input
            className="w-full btn btn-accent text-white mt-5"
            type="submit"
            value="Login"
          />
        </form>
        <label className="label">
          <span className="label-text">
            Forgot password?{" "}
            <Link to={"/reset-password"} className=" btn-link" >reset now</Link>
          </span>
        </label>
        <label className="label">
          <span className="label-text">
            New to Doctors Portal?{" "}
            <Link to={"/singup"} className=" btn-link">Create new account</Link>
          </span>
        </label>
        <div className="divider">OR</div>
        <Social></Social>
      </div>
    </div>
  );
};

export default Login;
