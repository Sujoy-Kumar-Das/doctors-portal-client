import React from "react";

const PrimaryButton = ({children}) => {
  return (
    <button className="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary">
      {children}
    </button>
  );
};

export default PrimaryButton;
