import React from "react";

export const ImgCard = ({ img }) => {
  return (
    <>
      <div className="img__bloch">
        <img src={img} alt="img" className="tab__img" />
      </div>
    </>
  );
};
