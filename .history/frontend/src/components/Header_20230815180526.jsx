import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="dark:text-white self-center whitespace-nowrap text-2xl font-semibold">
            TechShop
          </span>
        </Link>
        <div
          className="hidden w-full items-center justify-between md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="border-gray-100 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li>
              <Link
                to="/"
                className="hoverNav
                "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hoverNav">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hoverNav">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden items-center text-3xl md:flex">
          <div className="dropdown dropdown-end mr-4 flex items-center">
            <Link to="/cart">
              <label
                tabIndex={0}
                className="cursor-pointer hover:text-neutral-50"
              >
                <AiOutlineShoppingCart />
              </label>
              {cartItems.length > 0 && (
                <div className="badge badge-accent badge-sm absolute bottom-4 left-5 h-5 w-6 cursor-pointer">
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </div>
              )}
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="cursor-pointer hover:text-neutral-50"
            >
              <div className="w-15 rounded-full">
                <CgProfile />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link className="justify-between" to="/">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end flex md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-circle btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link to>Homepage</Link>
              </li>
              <li>
                <Link to>Portfolio</Link>
              </li>
              <li>
                <Link to>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
