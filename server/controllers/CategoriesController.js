import CategoriesService from '../services/CategoriesService.js'

class CategoriesController {
  async getCategories(req, res, next) {
    try {
      const categories = await CategoriesService.getAllCategories()
      res.json(categories)
    } catch (err) {
      next(err)
    }
  }
}
export default new CategoriesController()
