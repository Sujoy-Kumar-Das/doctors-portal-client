import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointmentBG from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
const Appointment = () => {
  return (
    <div className=" mt-40">
      <div
        className="hero  "
        style={{
          backgroundImage: `url(${appointmentBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content py-6 lg:py-0 flex-row">
          <img
            src={doctor}
            className="hidden lg:block w-1/2 rounded-lg -mt-24 "
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold text-white">Appoitment</h1>
            <h1 className="text-5xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className=" py-4 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
