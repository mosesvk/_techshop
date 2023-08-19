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
      navigate(`/order/${res._id}`);
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
        <div class="bg-gray-50 mt-10 rounded-lg border px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Payment Details</p>
          <p class="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div class="grid divide-y">
            <div>
              <label for="email" class="mb-2 mt-4 block text-sm font-medium">
                Email
              </label>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </div>

            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-400 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <div class="flex flex-col sm:flex-row">
              <div class="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  class="border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10"
                  placeholder="Street Address"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    class="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                type="text"
                name="billing-state"
                class="border-gray-200 focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border px-4 py-3 text-sm shadow-sm outline-none focus:z-10"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                class="border-gray-200 focus:border-blue-500 focus:ring-blue-500 flex-shrink-0 rounded-md border px-4 py-3 text-sm shadow-sm outline-none focus:z-10 sm:w-1/6"
                placeholder="ZIP"
              />
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
            class="bg-gray-900 text-white mb-8 mt-4 w-full rounded-md px-6 py-3 font-medium"
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
