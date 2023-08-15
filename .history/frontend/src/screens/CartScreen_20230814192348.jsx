import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // NOTE: no need for an async function here as we are not awaiting the
  // resolution of a Promise
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="col-span-2 grid grid-cols-1 divide-y p-4">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your Cart is Empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <>
            {cartItems.map((item, idx) => (
              <div className="grid grid-cols-7 items-center p-4" key={idx}>
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
                <div className="col-span-3">
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                </div>

                <h2>${item.price}</h2>
                <select className="select select-accent select-sm w-16 max-w-xs bg-light">
                  <option
                    disabled
                    selected
                    onChange={(e) =>
                      addToCartHandler(item, Number(e.target.value))
                    }
                  >
                    {item.qty}
                  </option>
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn btn-error btn-outline btn-xs w-12"
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="card w-96 p-4 shadow-xl">
        <div className="card-body grid grid-cols-1 divide-y">
          <div>
            <h1>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h1>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </div>
          <button
            className="btn btn-md"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
