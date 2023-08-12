import React from 'react';

const Product = ({ prod }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
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
        <h3>{prod.price}</h3>
      </div>
    </div>
  );
};

export default Product;
