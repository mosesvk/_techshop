import React from 'react';
import products from '../products';

const HomeScreen = () => {
  return (
    <div className='text-dark max-w-screen-xl mx-auto'>
      <h1>Latest Products</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map((prod, idx) => (
          <div className='bg-darkBlue' key={idx}>
            <h3>{prod.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
