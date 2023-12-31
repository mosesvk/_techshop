import { Link, useParams } from 'react-router-dom'
import products from '../products'

const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find(p => p._id === productId)

    console.log(product)

  return (
    <>
        <Link className='btn btn-ghost' to='/'>Go Back</Link>
    </>
  )
}

export default ProductScreen