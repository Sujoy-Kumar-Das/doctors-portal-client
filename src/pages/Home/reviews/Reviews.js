import React from "react";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg"
import ReviewCard from "./ReviewCard";
const Reviews = () => {
  const reviews = [
    {   
      id:1,
      name: "Winson Herry",
      location: "California",
      image: person1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id:2,
      name: "Winson Herry",
      location: "California",
      image: person2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id:3,
      name: "Winson Herry",
      location: "California",
      image: person3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <div>
          <h3 className=" text-primary font-bold text-xl">Testimonial</h3>
          <h1 className=" mt-3 text-black  text-3xl">What Our Patients Says</h1>
        </div>
        <img src={quote} className=" w-24 lg:w-48" alt="" />
      </div>
      <div className=" grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6">
        {reviews.map(review =><ReviewCard key={review.id} userReview={review}></ReviewCard>)}
      </div>
    </div>
  );
};

export default Reviews;
