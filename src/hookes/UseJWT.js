import { useEffect, useState } from "react";

const UseJWT = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Access_Token) {
            localStorage.setItem("Acess_Token", data.Access_Token);
            setToken(data.Access_Token);
          }
        });
    }
  }, [email]);
  return [token];
};

export default UseJWT;
