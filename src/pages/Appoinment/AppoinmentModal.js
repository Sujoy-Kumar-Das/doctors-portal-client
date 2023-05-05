import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthProvider } from "../../contexts/authContext/AuthContextProvider";
import { toast } from "react-hot-toast";

const AppoinmentModal = ({ bookinInfo, selected, setBookingInfo,refetch }) => {
  const { user } = useContext(AuthProvider);
  const { name: treatmentName, slots } = bookinInfo;
  
  const date = format(selected, "PP");
  const handleAppoitment = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const appointmentDate = date;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const booking = {
      treatment: treatmentName,
      patient: name,
      email,
      appointmentDate,
      phone: phone,
      slot
    };
   

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          refetch()
          setBookingInfo(null);

        } else {
          toast.error(data.message);
        }
      });
  };
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
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleAppoitment}
            className=" grid grid-cols-1 gap-3 my-5"
          >
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
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              required
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
