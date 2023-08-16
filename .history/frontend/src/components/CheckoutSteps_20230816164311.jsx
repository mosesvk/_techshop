import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <ul className="full steps">
      <li className={`step ${step1 ? "step-primary" : ""}`}>
        <Link to={step1 ? "/login" : ""}>Register</Link>
      </li>
      <li className={`step ${step2 ? "step-primary" : ""}`}>
        <Link to={step2 ? "/shipping" : ""}>Shipping</Link>
      </li>
      <li className={`step ${step3 ? "step-primary" : ""}`}>
        <Link to={step3 ? "/payment" : ""}>Payment</Link>
      </li>
      <li className={`step ${step4 ? "step-primary" : ""}`}>
        <Link to={step4 ? "/placeorder" : ""}>Place Order</Link>
      </li>
    </ul>
  );
};

export default CheckoutSteps;
