import ProductsModel from '../models/ProductsModel.js'

class ProductsService {
  async getAllProducts(query) {
    try {
      const { category, search } = query

      const filter = {}
      if (category) filter.category = category
      if (search) filter.$or = [{ title: { $regex: search, $options: 'i' } }]

      const products = await ProductsModel.find(filter)

      if (!products) throw ApiError.notFound('Продукты не найдены')

      return products
    } catch (err) {
      throw ApiError.internal('Произошла ошибка при получении продуктов')
    }
  }
  async getProductById(id) {
    try {
      const product = await ProductsModel.findById(id)

      if (!product) throw ApiError.badRequest('Такого продукта нет')

      return product
    } catch (err) {
      throw ApiError.internal('Произошла ошибка при получении продукта')
    }
  }
}

export default new ProductsService()
