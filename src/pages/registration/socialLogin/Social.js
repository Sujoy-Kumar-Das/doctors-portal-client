import React, { useContext } from "react";
import { AuthProvider } from "../../../contexts/authContext/AuthContextProvider";

const Social = () => {
  const {googleLogin} = useContext(AuthProvider);
  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>console.log(error))
  }
  return (
    <div>
      <button onClick={handleGoogleLogin} className=" btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
    </div>
  );
};

export default Social;
