import React, { useContext, useState } from "react";
import { AuthProvider } from "../../../contexts/authContext/AuthContextProvider";
import { toast } from "react-hot-toast";
import UseJWT from "../../../hookes/UseJWT";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const { googleLogin } = useContext(AuthProvider);
  const [currentUserEmail,setCurrentUserEmail] = useState("")
  const [token] = UseJWT(currentUserEmail)
  const navigate = useNavigate()
  if(token){
    navigate("/")
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        addUser(user.displayName,user.email)
      })
      .catch((error) => console.log(error));
  };
  const addUser = (name, email) => {
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
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.success){
        toast.success(data.message)
        setCurrentUserEmail(email);
      }
      else{
        toast.error(data.message)
      }
    })
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className=" btn btn-outline w-full">
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default Social;
