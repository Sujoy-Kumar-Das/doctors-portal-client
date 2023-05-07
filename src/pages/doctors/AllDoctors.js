import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthProvider } from "../../contexts/authContext/AuthContextProvider";
import { toast } from "react-hot-toast";

const AllDoctors = () => {
  const { user } = useContext(AuthProvider);
  const { data = [] } = useQuery({
    queryKey: ["store-doctors"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/store-doctors?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("Acess_Token")}`,
          },
        }
      );
      const data = await res.json();
      if (data.success) {
        return data;
      } else {
        toast.error(data.message);
      }
    },
  });
  const doctors = data.doctors;

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">All Doctors</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button className=" btn btn-error text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDoctors;
