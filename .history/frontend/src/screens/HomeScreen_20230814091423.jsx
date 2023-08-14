// import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const {data: products, isLoading, isError} = useGetProductsQuery()
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
      {isLoading ? () : error ? () : (      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((prod, idx) => (
          <Product prod={prod} key={prod._id} />
        ))}
      </div>)}

    </div>
  );
};

export default HomeScreen;
