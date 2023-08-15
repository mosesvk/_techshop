import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";

const ProductScreen = () => {
  // const [product, setProduct] = useState({});

  const { id: productId } = useParams();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(productId);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${productId}`);
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, [productId]);

  return (
    <div className="m-auto max-w-screen-xl text-dark">
      <Link className="btn btn-outline mb-4" to="/">
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="error">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
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
              <h3>{product.description}</h3>
            </div>
          </div>
          <div className="card w-96 p-4 shadow-xl">
            <div className="card-body grid grid-cols-1 divide-y">
              <div className="flex grid-cols-2 justify-between">
                <h2 className="card-title">Price:</h2>
                <h2 className="card-title">${product.price}</h2>
              </div>
              <div className="flex grid-cols-2 justify-between">
                <h2 className="card-title">Stock:</h2>
                <h2 className="card-title">
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </h2>
              </div>
              {product.countInStock > 0 && (
                <div className="card-actions justify-start pt-4 flex">
                  <h2 className="card-title">Qty:</h2>
                  <select className="select select-bordered w-full max-w-xs">
                    <option
                      disabled
                      selected
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                    >
                      Qty
                    </option>
                    {[...Array(product.countInStock).keys()].map(x => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="card-actions justify-start pt-4">
                <button
                  className="btn btn-success btn-outline"
                  disabled={product.countInStock === 0}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
