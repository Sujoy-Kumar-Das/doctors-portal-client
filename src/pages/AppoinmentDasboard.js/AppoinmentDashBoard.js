import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthProvider } from "../../contexts/authContext/AuthContextProvider";

const AppoinmentDashBoard = () => {
  const { user } = useContext(AuthProvider);
  const { data: appoinments = [] } = useQuery({
    queryKey: ["booking", user],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/booking?email=${user.email}`
      );
      const data = res.json();
      return data;
    },
  });
  console.log(appoinments)
  return (
    <div>
      <h1 className=" text-xl font-bold mb-3">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appoinments?.booking.map((appoinment, i) => (
              <tr key={appoinment._id}>
                <th>{i+1}</th>
                <td>{appoinment.patient}</td>
                <td>{appoinment.treatment}</td>
                <td>{appoinment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppoinmentDashBoard;
