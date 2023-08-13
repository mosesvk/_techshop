import { Link, useParams } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  console.log(product);

  return (
    <div className="m-auto max-w-screen-xl text-dark">
      <Link className="btn btn-outline mb-4" to="/">
        Go Back
      </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="grid grid-cols-1 divide-y p-4">
          <div>
            <h2 className="text-2xl">{product.name}</h2>
          </div>
          <div>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
          <div>
            <h3>Price: ${product.price}</h3>
          </div>
        </div>
        <div className="card w-96 p-4 shadow-xl">
          <div className="card-body grid grid-cols-1 divide-y">
            <div className='grid-cols-2 flex justify-between'>
              <h2 className="text-xl card-title">Price:</h2>
              <h2 className="card-title">${product.price}</h2>
            </div>
            <div className='grid-cols-2 flex justify-between'>
              <h2 className="card-title">Stock:</h2>
              <h2 className="card-title">{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</h2>
            </div>            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
