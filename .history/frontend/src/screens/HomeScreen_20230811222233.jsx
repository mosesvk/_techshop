import React from 'react';
import products from '../products';

const HomeScreen = () => {
  return (
    <div className='text-dark'>
      <h1>Latest Products</h1>
      <div className='grid grid-cols-4 grid-flow-col gap-4'>
        {products.map((prod, idx) => (
          <div key={idx}>
            <h3>{prod.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
