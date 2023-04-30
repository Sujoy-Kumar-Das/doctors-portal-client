import React from "react";
import serviceBannerImg from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
const ServiceBanner = () => {
  return (
    <div className="hero mt-28 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          className="h-[480px] w-full lg:w-1/2 rounded-md mx-20"
          src={serviceBannerImg}
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
