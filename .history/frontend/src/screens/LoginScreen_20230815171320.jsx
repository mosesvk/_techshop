import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1 className="pb-2 text-3xl text-darkBlue">Sign In</h1>
      <form
        className="mb-4 rounded border bg-light px-8 pb-8 pt-6 shadow-xl"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-darkBlue"
            htmlFor="username"
          >
            Email Address
          </label>
          <input
            className="text-gray-700 shadow-lg focus:shadow-outline w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight  shadow focus:bg-[#ffff]"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-darkBlue"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-red-500 text-gray-700 shadow-lg focus:shadow-outline mb-3 w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight shadow focus:bg-[#ffff]"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex justify-between'>
          <div className="flex items-center justify-between">
            <button
              className="btn btn-outline border-darkBlue text-darkBlue shadow-md"
              disabled={isLoading}
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              <p className='className="text-blue-500 font-bold" inline-block align-baseline hover:text-dark text-lg' >
                Register?
              </p>
            </Link>
          </div>
        </div>
        {isLoading && <Loader />}
      </form>
    </FormContainer>
  );
};

export default LoginScreen;
