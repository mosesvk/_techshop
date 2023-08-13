import { Link, useParams } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'

const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find(p => p._id === productId)

    console.log(product)

  return (
    <div className='text-dark max-w-screen-xl m-auto'>
        <Link className='btn btn-outline' to='/'>Go Back</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            <div className=''>
                <img src={product.image} alt={product.name}/>
            </div>
            <div className='grid grid-cols-1 divide-y'>
                <div>
                    <h2>{product.name}</h2>
                </div>
                <div>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>
                <div>
                    <h3>Price: ${product.price}</h3>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default ProductScreen