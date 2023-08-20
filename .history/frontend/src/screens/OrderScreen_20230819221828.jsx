import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from "../slices/ordersApiSlice";

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Order is paid");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  }

  // TESTING ONLY! REMOVE BEFORE PRODUCTION
  async function onApproveTest() {
    console.log('hit')
    await payOrder({ orderId, details: { payer: {} } });
    refetch();

    toast.success('Order is paid');
  }

  function onError(err) {
    toast.error(err.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  // console.log(order);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message>{error.data.message}</Message>
  ) : (
    <div className="xl: lg:w-9/12">
      <h1 className="mb-6 text-center text-3xl">
        Order: <span className="text-2xl">{order._id}</span>
      </h1>
      <div className="grid grid-cols-3">
        <div className="col-span-2 grid divide-y pr-4">
          <div className="grid grid-rows-5 py-4">
            <h1 className="text-2xl">Shipping</h1>
            <p>
              <strong className="bold">Name:</strong> {order.user.name}
            </p>
            <p>
              <strong className="bold">Email:</strong> {order.user.email}
            </p>
            <p>
              <strong className="bold">Address:</strong>{" "}
              {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <Message>Delivered on {order.deliveredAt}</Message>
            ) : (
              <Message variant="error">Not Delivered</Message>
            )}
          </div>
          <div className="grid grid-rows-3 py-4">
            <h1 className="text-2xl">Payment Method</h1>
            <p>
              <strong className="bold">Method:</strong> {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <Message>Paid on {order.paidAt}</Message>
            ) : (
              <Message variant="error">Not Paid</Message>
            )}
          </div>
          {order.orderItems.length === 0 ? (
            <Message>Order is Empty</Message>
          ) : (
            <>
              {order.orderItems.map((item, idx) => (
                <div key={idx}>
                  <div >
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
                </div>
              ))}
            </>
          )}
        </div>
        <div>
          <div className="bg-gray-50 divide-y rounded-lg border px-4 py-8 lg:mt-0 ">
            <h1 className="pb-4 text-2xl">Order Summary</h1>
            <div className="mr-8 pt-4">
              <div className="flex justify-between">
                <h1>Items</h1>
                <p>${order.itemsPrice}</p>
              </div>
              <div className="flex justify-between">
                <h1>Shipping</h1>
                <p>${order.shippingPrice}</p>
              </div>
              <div className="flex justify-between">
                <h1>Tax</h1>
                <p>${order.taxPrice}</p>
              </div>
            </div>
            <div className="m-1 flex justify-between rounded bg-warning p-1 text-primary-content">
              <h1>Total</h1>
              <p>${order.totalPrice}</p>
            </div>
            {!order.isPaid && (
              <div>
                {loadingPay && <Loader />}

                {isPending ? (
                  <Loader />
                ) : (
                  <div>
                    {/* THIS BUTTON IS FOR TESTING! REMOVE BEFORE PRODUCTION! */}
                    <button
                        className='btn btn-primary'
                        style={{ marginBottom: '10px' }}
                        onClick={onApproveTest}
                      >
                        Test Pay Order
                      </button>

                    <div>
                      <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                      ></PayPalButtons>
                    </div>
                  </div>
                )}

                {loadingDeliver && <Loader />}

                {userInfo &&
                  userInfo.isAdmin &&
                  order.isPaid &&
                  !order.isDelivered && (
                    <div>
                      <button
                        type="button"
                        className="btn btn-block"
                        onClick={deliverHandler}
                      >
                        Mark As Delivered
                      </button>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
