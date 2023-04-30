import React from "react";

const InfoCard = ({card}) => {
    const {title,description,image,bgClass} = card;
  return (
    <div className={`card card-side shadow-xl ${bgClass} p-6 text-white`}>
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
