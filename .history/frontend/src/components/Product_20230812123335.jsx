import { Link } from 'react-router-dom';
import Rating from './Rating'

const Product = ({ prod }) => {
  return (
    <div className='card bg-neutral-50 hover:bg-light hover:border-orange shadow-xl text-dark cursor-pointer border border-solid border-gray-400'>
      <Link to={`/product/${prod._id}`}>
        <figure>
          <img
            className='opacity-75 hover:opacity-100 max-w-[80%] mt-4'
            src={prod.image}
            alt='product'
          />
        </figure>
      </Link>

      <div className='card-body'>
        <h2 className='card-title'>
          {prod.name}
          {prod.new && <div className='badge text-light bg-orange'>NEW</div>}
        </h2>
        <div>
          <Rating value={prod.rating} text={`${prod.numReviews} reviews`} />
        </div>
        <h2>${prod.price}</h2>
      </div>
    </div>
  );
};

export default Product;
