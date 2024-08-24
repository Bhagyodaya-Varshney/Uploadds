import "./premiumMem.css";
import React from "react";

export const PremiumMem = ({handleShowPremium}) => {
  return (
    <div className="premiumMemMain">
      <div className="premiumDiv">
        <div className="changePassHead">
          <h2>Premium Member</h2>
          <button id="changePassDivClose" onClick={handleShowPremium}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};
