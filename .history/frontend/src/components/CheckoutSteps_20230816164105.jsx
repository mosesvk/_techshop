import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <ul className="full steps">
      <Link to={step1 ? "/login" : ""}>
        <li className={`step ${step1 ? "step-primary" : ""}`}>Register</li>
      </Link>
      <Link to={step2 ? '/shipping' : ''}>
        <li className={`step ${step2 ? "step-primary" : ""}`}>Shipping</li>
      </Link>
      <Link to={step3 ? '/payment' : ''}>
        <li className={`step ${step3 ? "step-primary" : ""}`}>Purchase</li>
      </Link>
      <li className={`step ${step4 ? "step-primary" : ""}`}>Receive Product</li>
    </ul>
  );
};

export default CheckoutSteps;
