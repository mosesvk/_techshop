import React from 'react';

const Product = ({ prod }) => {
  return (
    <div className='card bg-neutral-50 hover:bg-neutral-200 shadow-xl text-dark cursor-pointer'>
      <a href={`/product/${prod._id}`}>
        <figure>
          <img
            className='opacity-75 hover:opacity-100'
            src={prod.image}
            alt='product'
          />
        </figure>
      </a>

      <div className='card-body'>
        <h2 className='card-title'>
          {prod.name}
          {prod.new && <div className='badge text-light bg-orange'>NEW</div>}
        </h2>
        <h2>${prod.price}</h2>
      </div>
    </div>
  );
};

export default Product;
