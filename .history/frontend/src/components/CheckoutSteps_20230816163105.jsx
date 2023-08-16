import React from "react";
import { Link } from 'react-router-dom';

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <ul className="steps">
        <li className="step step-primary">
        {step1 ? (<Link to='login'>Sign In</Link>) : (<>Sign In</>)}
        </li>
      <li className="step step-primary">
        {step2 ? (<Link to='/shipping'>Shipping</Link>) : (<>Shipping</>)}
        </li>
        <li className="step step-primary">
        {step3 ? (<Link to='/payment'>Payment</Link>) : (<>Payment</>)}
        </li>
        <li className="step step-primary">
        {step4 ? (<Link to='/placeorder'>Place Order</Link>) : (<>Place Order</>)}
        </li>
    </ul>
  );
};

export default CheckoutSteps;
