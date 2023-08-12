import React from 'react';
import products from '../products';

const HomeScreen = () => {
  return (
    <div className='text-dark'>
      <h1>Latest Products</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-col gap-4'>
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
