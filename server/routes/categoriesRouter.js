import { Router } from 'express'
const router = Router()

import CategoriesController from '../controllers/CategoriesController.js'

router.get('/', CategoriesController.getCategories)

export default router
