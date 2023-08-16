import React from "react";

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <ul className="steps">
      <li className="step step-primary">Register</li>
      <li className="step step-primary">Choose plan</li>
      <li className="step">Purchase</li>
      <li className="step">Receive Product</li>
    </ul>
  );
};

export default CheckoutSteps;
