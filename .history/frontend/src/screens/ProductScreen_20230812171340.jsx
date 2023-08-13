import { Link, useParams } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find(p => p._id === productId)

    console.log(product)

  return (
    <div className='text-dark max-w-screen-xl m-auto'>
        <Link className='btn btn-outline' to='/'>Go Back</Link>
    </div>
  )
}

export default ProductScreen