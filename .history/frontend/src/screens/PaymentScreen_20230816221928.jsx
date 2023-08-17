import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../slices/cartSlice";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 className='text-2xl pb-2'>Payment Method</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='PayPal'>
        PayPal or Credit Card
        </label>
        <input
          type="radio"
          className="radio"
          id="PayPal"
          name="paymentMethod"
          value="PayPal"
          checked
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <div>
          <button type="submit" className="btn btn-outline">
            Continue
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default PaymentScreen;
