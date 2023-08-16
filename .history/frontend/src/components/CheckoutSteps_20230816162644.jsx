import React from "react";
import { Link } from 'react-router-dom';

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <ul className="steps">
        {step1 ? (<li className="step step-primary"><Link to='login'>SignIn</Link></li>) : (<li className="step step-primary">Sign In</li>)}
      
      <li className="step step-primary">Choose plan</li>
      <li className="step">Purchase</li>
      <li className="step">Receive Product</li>
    </ul>
  );
};

export default CheckoutSteps;
