import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {

  return (
<ul className="steps full">
  <li className={`step ${step2 ? 'step-primary' : ''}`}>Register</li>
  <li className={`step ${step2 ? 'step-primary' : ''}`}>Choose plan</li>
  <li className={`step ${step3 ? 'step-primary' : ''}`}>Purchase</li>
  <li className={`step ${step4 ? 'step-primary' : ''}`}>Receive Product</li>
</ul>
  );
};

export default CheckoutSteps;
