import React from "react";

const ReviewCard = ({ userReview }) => {
  const { name, location, review, image } = userReview;
  return (
    <div className="card">
      <div className="card-body">
        
        <p>{review}</p>
        <div className="card-actions justify-start mt-3">
          <div className="avatar me-3 ">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="" />
            </div>
          </div>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
