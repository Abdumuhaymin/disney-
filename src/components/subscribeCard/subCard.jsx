import React from "react";
import "./card.css";

export const SubCard = ({ img, children }) => {
  return (
    <>
      <div className="choose__subcard">
        <div className="sub__card">
          <img src={img} alt="img" className="card__img" />
          {children}
        </div>
      </div>
    </>
  );
};
