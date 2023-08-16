import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../slices/cartSlice";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || "",
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <FormContainer>
      <h1 className='mb-4 text-3xl'>Shipping</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            className="mb-1 block text-sm font-bold text-darkBlue"
            htmlFor="address"
          >Address</label>
          <input
            className="border-red-500 text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight shadow shadow-lg focus:bg-[#ffff] focus:text-darkBlue"
            type="text"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-1 block text-sm font-bold text-darkBlue"
            htmlFor="city"
          >City</label>
          <input
            className="border-red-500 text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight shadow shadow-lg focus:bg-[#ffff] focus:text-darkBlue"
            type="text"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-1 block text-sm font-bold text-darkBlue"
            htmlFor="postalCode"
          >Postal Code</label>
          <input
            className="border-red-500 text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight shadow shadow-lg focus:bg-[#ffff] focus:text-darkBlue"
            type="text"
            placeholder="Enter Postal Code"
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-1 block text-sm font-bold text-darkBlue"
            htmlFor="country"
          >Country</label>
          <input
            className="border-red-500 text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight shadow shadow-lg focus:bg-[#ffff] focus:text-darkBlue"
            type="text"
            placeholder="Enter Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn btn-outline border-darkBlue text-darkBlue shadow-md"
            disabled={isLoading}
            type="submit"
          >
            Continue
          </button>
          </div>
      </form>
    </FormContainer>
  );
};

export default ShippingScreen;
