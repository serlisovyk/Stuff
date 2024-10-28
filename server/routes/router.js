import { Router } from 'express'
const router = Router()

import productsRouter from './productsRouter.js'
import categoriesRouter from './categoriesRouter.js'

router.use('/products', productsRouter)
router.use('/categories', categoriesRouter)

export default router
