import React from "react";
import Banner from "../banner/Banner";
import UseTitle from "../../../hookes/UseTitle";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../service/Services";
import Appointment from "../appoitment/Appointment";



const Home = () => {
  UseTitle("Home");
  return (
    <div className="mx-[21px]">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
