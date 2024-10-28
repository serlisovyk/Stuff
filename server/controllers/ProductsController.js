import ProductsService from '../services/ProductsService.js'

class ProductsController {
  async getProducts(req, res) {
    try {
      const products = await ProductsService.getAllProducts(req.query)
      res.json(products)
    } catch (err) {
      next(err)
    }
  }

  async getOneProduct(req, res) {
    try {
      const product = await ProductsService.getProductById(req.params.id)
      res.json(product)
    } catch (err) {
      next(err)
    }
  }
}

export default new ProductsController()
