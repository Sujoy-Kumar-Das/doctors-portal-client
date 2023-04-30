import React from "react";
import chairImg from "../../../assets/images/chair.png";
const Banner = () => {
  return (
    <div
      className="min-h-[638px] flex align-middle justify-between"
      style={{
        backgroundImage: ` linear-gradient(45deg, rgb(255, 255, 255), #cffff5b7),url(${chairImg}) `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero  my-2 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chairImg} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
