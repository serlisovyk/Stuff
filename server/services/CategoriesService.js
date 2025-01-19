import ApiError from '../error/ApiError.js'
import CategoriesModel from '../models/CategoriesModel.js'

class CategoriesService {
  async getAllCategories() {
    try {
      const categories = await CategoriesModel.find()

      if (!categories) throw ApiError.internal('No categories')

      return categories
    } catch (err) {
      throw ApiError.internal('Error getting categories')
    }
  }
}

export default new CategoriesService()
