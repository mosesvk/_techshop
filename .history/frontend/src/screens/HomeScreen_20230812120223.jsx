import React from 'react';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <div className='text-dark max-w-screen-xl mx-auto'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map((prod, idx) => (
            <Product prod={prod} key={prod._id}/>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
