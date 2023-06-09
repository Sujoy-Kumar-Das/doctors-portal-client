import React, { useContext } from "react";
import { AuthProvider } from "../../contexts/authContext/AuthContextProvider";

const AppoinmentCard = ({ appointmentOption,setBookingInfo }) => {
  const { name, slots } = appointmentOption;
  const {user} = useContext(AuthProvider)
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-secondary text-xl font-bold">{name}</h2>
        <p>{slots?.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots?.length} {slots?.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center ">
          
          {
            user ? <label htmlFor="appoinment-modal" onClick={()=>setBookingInfo(appointmentOption)} className={`btn btn-primary text-white`}>Book now</label>:
            <label htmlFor="my-modal-3" className="btn">
            Book now
          </label>
          }
        
        </div>
      </div>
    </div>
  );
};

export default AppoinmentCard;
