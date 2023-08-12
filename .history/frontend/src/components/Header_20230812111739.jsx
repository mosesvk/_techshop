import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            TechShop
          </span>
        </a>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto'
          id='navbar-user'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='/'
                className='hoverNav
                '
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/'
                className='hoverNav'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='/'
                className='hoverNav'
              >
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex items-center text-3xl'>
          <div className='dropdown dropdown-end mr-4'>
            <label tabIndex={0} className='cursor-pointer hover:text-neutral-50'>
              <AiOutlineShoppingCart />
            </label>
          </div>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='cursor-pointer hover:text-neutral-50'>
              <div className='w-15 rounded-full'>
                <CgProfile />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between' href='/'>
                  Profile
                </a>
              </li>
              <li>
                <a href='/'>Settings</a>
              </li>
              <li>
                <a href='/'>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='navbar-end md:hidden flex'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
