import React from "react";
import chairImg from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
const AppoinmentBanner = ({selected,setSelected}) => {
  return (
    <div
      className="min-h-[538px] flex align-middle justify-between"
      style={{
        backgroundImage: ` linear-gradient(45deg, rgb(255, 255, 255), #cffff5b7),url(${chairImg}) `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero  my-2 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chairImg}
            className="w-full lg:w-1/2 rounded-lg shadow-2xl ms-0 lg:ms-20"
            alt=""
          />
          <div>
            <DayPicker
             mode="single"
             selected={selected}
             onSelect={setSelected}
             ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
