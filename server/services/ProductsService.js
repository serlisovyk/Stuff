import ProductsModel from '../models/ProductsModel.js'

class ProductsService {
  async getAllProducts(query) {
    try {
      const { category, search } = query

      const filter = {}
      if (category) filter.category = category
      if (search) filter.$or = [{ title: { $regex: search, $options: 'i' } }]

      const products = await ProductsModel.find(filter)

      if (!products) throw ApiError.notFound('No products found')

      return products
    } catch (err) {
      throw ApiError.internal('An error occurred while receiving products')
    }
  }

  async getProductById(id) {
    try {
      const product = await ProductsModel.findById(id)

      if (!product) throw ApiError.badRequest('No product found')

      return product
    } catch (err) {
      throw ApiError.internal('An error occurred while receiving the product')
    }
  }
}

export default new ProductsService()
