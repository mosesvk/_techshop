import React from 'react';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
        {products.map(prod => {
            <div>
                {prod.name}
                <div/>
        }) }
      </div>
    </>
  );
};

export default HomeScreen;
