import { format } from "date-fns";
import React from "react";

const AppoinmentModal = ({ bookinInfo, selected ,setBookingInfo}) => {
  const { name, slots } = bookinInfo;
  const date = format(selected, "PP");
  const handleAppoitment = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email= form.email.value;
    const appoinmentDate = date;
    const phone = form.phone.value;
    setBookingInfo(null)
    console.log(name,email,appoinmentDate,phone)
  }
  return (
    <>
      <input type="checkbox" id="appoinment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appoinment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleAppoitment} className=" grid grid-cols-1 gap-3 my-5">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select w-full bordered">
              {slots?.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Sumbit"
              className="input input-bordered w-full btn btn-accent text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppoinmentModal;
