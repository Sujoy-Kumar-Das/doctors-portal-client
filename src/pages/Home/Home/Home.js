import React from "react";
import Banner from "../banner/Banner";
import UseTitle from "../../../hookes/UseTitle";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../service/Services";
import Appointment from "../appoitment/Appointment";
import Reviews from "../reviews/Reviews";
import ContactUs from "../contactUS/ContactUs";



const Home = () => {
  UseTitle("Home");
  return (
    <div className="mx-[21px]">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Appointment></Appointment>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
