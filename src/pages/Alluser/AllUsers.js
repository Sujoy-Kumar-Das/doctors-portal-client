import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthProvider } from "../../contexts/authContext/AuthContextProvider";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { user } = useContext(AuthProvider);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("Acess_Token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Acess_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin Action</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users?.users?.map((user, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user?.role !== "Admin" && (
                  <button
                    onClick={() => handleAdmin(user._id, user.name)}
                    className=" btn btn-primary"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button className=" btn btn-error">Remove Admin</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
