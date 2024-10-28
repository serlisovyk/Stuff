import ApiError from '../error/ApiError.js'
import CategoriesModel from '../models/CategoriesModel.js'

class CategoriesService {
  async getAllCategories() {
    try {
      const categories = await CategoriesModel.find()

      if (!categories) throw ApiError.internal('Категорий нет')

      return categories
    } catch (err) {
      throw ApiError.internal('Ошибка при получении категорий')
    }
  }
}

export default new CategoriesService()
