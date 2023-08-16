import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        const message = err?.data?.message || err.error;
        toast.error(message, { autoClose: 5000 });
      }
    }
  };
  return (
    <FormContainer>
      <h1 className="pb-2 text-3xl text-darkBlue">Register</h1>
      <ToastContainer theme="colored" newestOnTop />

      <form className="py-2" onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-darkBlue"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight shadow  shadow-lg focus:bg-[#ffff] focus:text-darkBlue"
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-darkBlue"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border border-darkBlue bg-light px-3 py-2 leading-tight shadow  shadow-lg focus:bg-[#ffff] focus:text-darkBlue"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
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
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-darkBlue data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-darkBlue [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id='password'
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-light transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-darkBlue peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-darkBlue"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none :text-neutral-200 dark:placeholder:text-neutral-200dark light:peer-focus:text-darkBlue [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id='confirmPassword'
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn btn-outline border-darkBlue text-darkBlue shadow-md"
            disabled={isLoading}
            type="submit"
          >
            Register
          </button>
        </div>

        {isLoading && <Loader />}
      </form>
      <div>
        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
          <p className='className="text-blue-500 font-bold" inline-block pl-2 align-baseline text-lg underline hover:text-dark'>
            Already User?
          </p>
        </Link>
      </div>
    </FormContainer>
  );
};

export default RegisterScreen;
