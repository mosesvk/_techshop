import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();
  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/orders/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="grid grid-cols-2 gap-4">
        <div className=" grid divide-y">
          <div>
            <h2>Shipping</h2>
            <p>
              <strong>Address:</strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </div>

          <div>
            <h2>Payment Method</h2>
            <strong>Method: </strong>
            {cart.paymentMethod}
          </div>

          <div className="bg-white mt-8 space-y-3 rounded-lg border px-2 py-4 sm:px-6">
            <h2>Order Items</h2>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <div>
                {cart.cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="bg-white flex flex-col rounded-lg sm:flex-row">
                      <img
                        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src={item.image}
                        alt=""
                      />
                      <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </span>
                        <p className="text-lg font-bold">
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-50 mt-10 rounded-lg border px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="grid divide-y">
            <div>
              <label htmlFor="email" className="mb-2 mt-4 block text-sm font-medium">
                Email
              </label>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <div className="mt-6 border-b border-t py-2">
              <div className="flex items-center justify-between">
                <p className="text-gray-900 text-sm font-medium">Items</p>
                <p className="text-gray-900 font-semibold">
                  ${cart.itemsPrice}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-900 text-sm font-medium">Shipping</p>
                <p className="text-gray-900 font-semibold">
                  ${cart.shippingPrice}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-900 text-sm font-medium">Tax</p>
                <p className="text-gray-900 font-semibold">${cart.taxPrice}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-gray-900 text-sm font-medium">Total</p>
              <p className="text-gray-900 text-2xl font-semibold">
                ${cart.totalPrice}
              </p>
            </div>
          </div>
          {error && <Message>{error.data.message}</Message>}
          <button
            className="bg-gray-900 text-white mb-8 mt-4 w-full rounded-md px-6 py-3 font-medium"
            disabled={cart.cartItems === 0}
            onClick={placeOrderHandler}
          >
            Place Order
          </button>
        </div>
      </div>
    </FormContainer>
  );
};

export default PlaceOrderScreen;
