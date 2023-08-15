// import { useEffect, useState } from "react";
// import axios from "axios";
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log(error)
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const {data} = await axios.get("/api/products");
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="m-auto max-w-screen-xl text-dark">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant='error'>{isError?.data?.message || isError.error}</Message>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((prod, idx) => (
            <Product prod={prod} key={prod._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
