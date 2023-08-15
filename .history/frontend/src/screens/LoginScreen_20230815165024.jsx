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
      <h1>Sign In</h1>
      <form class="bg-white mb-4 rounded px-8 pb-8 pt-6 shadow-md">
        <div class="mb-4">
          <label
            class="text-gray-700 mb-2 block text-sm font-bold"
            for="username"
          >
            Email Address
          </label>
          <input
            class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            class="text-gray-700 mb-2 block text-sm font-bold"
            for="password"
          >
            Password
          </label>
          <input
            class="border-red-500 text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white focus:shadow-outline rounded px-4 py-2 font-bold focus:outline-none"
            disabled={isLoading}
            type="submit"
          >
            Sign In
          </button>
          <Link
            class="text-blue-500 hover:text-blue-800 inline-block align-baseline text-sm font-bold"
            to="#"
          >
            Forgot Password?
          </Link>
        </div>
        {isLoading && <Loader />}
      </form>
    </FormContainer>
  );
};

export default LoginScreen;
