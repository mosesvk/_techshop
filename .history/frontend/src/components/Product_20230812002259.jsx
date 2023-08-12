import React from 'react';

const Product = ({ prod }) => {
  return (
    <div className='card bg-base-100 shadow-xl text-light'>
      <a href={`/product/${prod._id}`}>
        <figure>
          <img
            src={prod.image}
            alt='product'
          />
        </figure>
      </a>

      <div className='card-body'>
        <h2 className='card-title'>
          {prod.name}
          {prod.new && <div className='badge badge-secondary'>NEW</div>}
        </h2>
        <h2>${prod.price}</h2>
      </div>
    </div>
  );
};

export default Product;
