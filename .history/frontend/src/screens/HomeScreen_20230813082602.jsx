import {useEffect, useState} from 'react';
import axios from 'axios'
// import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async() => {
      const products = await axios.get('/api/products')
      setProducts(products)
    }

    fetchProducts()


  }, [])

  return (
    <div className='text-dark max-w-screen-xl m-auto'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map((prod, idx) => (
            <Product prod={prod} key={prod._id}/>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;