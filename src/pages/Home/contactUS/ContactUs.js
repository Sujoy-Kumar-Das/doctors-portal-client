import React from "react";
import contactBG from "../../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <div
      className=" min-h-[540px] flex justify-center items-center"
      style={{
        backgroundImage: `url(${contactBG})`,
        backgroundPosition: "center",
        backgroundSize: "center",
      }}
    >
      <div>
        <h4 className=" text-center text-primary text-xl">Contact Us</h4>
        <h2 className=" text-center text-2xl text-white">
          Stay connected with us
        </h2>
        <form className="my-5">
          <p>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Subject"
              className=" my-4 input input-bordered w-full max-w-xs"
            />
          </p>
          <p>
            <textarea
              className="textarea  input-bordered w-full max-w-xs"
              placeholder="Message"
            ></textarea>
          </p>
          <div className=" flex justify-center">
            <p>
              <input
                type="submit"
                value="Submit"
                className=" btn btn-primary"
              />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
