import { format } from "date-fns";
import React, { useState } from "react";
import AppoinmentCard from "./AppoinmentCard";
import AppoinmentModal from "./AppoinmentModal";
import { useQuery } from "@tanstack/react-query";
import LoginModal from "./loginModal/LoginModal";

const AvaileableAppoinment = ({ selected }) => {
  const [bookinInfo, setBookingInfo] = useState(null);

  const date = format(selected, "PP");
  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appoinmentOptions?date=${date}`).then(
        (res) => {
          return res.json();
        }
      ),
  });

  return (
    <div className="mt-12">
      <p className=" text-center font-bold text-secondary text-xl">
        Available Services on {format(selected, "PP")}{" "}
      </p>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppoinmentCard
            setBookingInfo={setBookingInfo}
            key={option._id}
            appointmentOption={option}
          ></AppoinmentCard>
        ))}
      </div>
      {bookinInfo && (
        <AppoinmentModal
          setBookingInfo={setBookingInfo}
          bookinInfo={bookinInfo}
          selected={selected}
          refetch={refetch}
        ></AppoinmentModal>
      )}
      <LoginModal></LoginModal>
    </div>
  );
};

export default AvaileableAppoinment;
