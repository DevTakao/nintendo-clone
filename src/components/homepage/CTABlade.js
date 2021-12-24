import React from "react";
import "./CTABlade.css";

export const CTABlade = ({
  imgUrl,
  imgAlt,
  bladeDesc,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className="CTABlade">
      <div className="blade-img-container">
        <img className="blade-img" src={imgUrl} alt={imgAlt} />
      </div>
      <div className="blade-elements">
        <div className="blade-text-container">
          <p className="blade-text">{bladeDesc}</p>
        </div>
        <div className="cta-btn-container">
          <span className="cta-btn">{buttonText + " >"}</span>
        </div>
      </div>
    </div>
  );
};
