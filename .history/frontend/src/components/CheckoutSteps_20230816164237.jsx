import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <ul className="full steps">
      <li className={`step ${step1 ? "step-primary" : ""}`}>
        <Link to={step1 ? "/login" : ""}>Register</Link>
      </li>
      <li className={`step ${step2 ? "step-primary" : ""}`}><Link to={step2 ? "/shipping" : ""}>
        Shipping
      </Link></li>
      <Link to={step3 ? "/payment" : ""}>
        <li className={`step ${step3 ? "step-primary" : ""}`}>Payment</li>
      </Link>
      <Link to={step4 ? "/placeorder" : ""}>
        <li className={`step ${step4 ? "step-primary" : ""}`}>Place Order</li>
      </Link>
    </ul>
  );
};

export default CheckoutSteps;
