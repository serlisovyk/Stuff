import { Router } from 'express'
const router = Router()

import ProductsController from '../controllers/ProductsController.js'

router.get('/', ProductsController.getProducts)
router.get('/:id', ProductsController.getOneProduct)

export default router
