import express from 'express'
const router = express.Router()
import { getProducts, getSingleProdut } from '../controllers/productController.js'


router.route('/').get(getProducts)
router.route('/:id').get(getSingleProdut)

export default router