import { Link, useParams } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find(p => p._id === productId)

    console.log(product)

  return (
    <div className='text-dark max-w-screen-xl m-auto'>
        <Link className='btn btn-outline' to='/'>Go Back</Link>
        <div className='grid grid-cols-3 gap-4'>
            <div className=''>
                <img src={product.image} alt={product.name}/>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default ProductScreen