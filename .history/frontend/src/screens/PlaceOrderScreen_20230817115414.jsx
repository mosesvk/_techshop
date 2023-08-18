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
      <div className="grid grid-cols-3">
        <div className="col-span-2 grid">
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

          <div>
            <h2>Order Items</h2>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <div>
                {cart.cartItems.map((item, index) => (
                  <div key={index}>
                    <div md={1}>
                      <image src={item.image} alt={item.name} fluid rounded />
                    </div>
                    <div>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div md={4}>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="card w-96 p-4 shadow-xl">
          <div>
            <h2>Order Summary</h2>
          </div>
          <div>
            <div>Items</div>
            <div>${cart.itemsPrice}</div>
          </div>
          <div>
            <div>Shipping</div>
            <div>${cart.shippingPrice}</div>
          </div>
          <div>
            <div>Tax</div>
            <div>${cart.taxPrice}</div>
          </div>
          <div>
            <div>Total</div>
            <div>${cart.totalPrice}</div>
          </div>
          <div>
            {error && <Message variant="danger">{error.data.message}</Message>}
          </div>
          <div>
            <Button
              type="button"
              className="btn-block"
              disabled={cart.cartItems === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </Button>
            {isLoading && <Loader />}
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default PlaceOrderScreen;
