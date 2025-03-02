import axios from 'axios'
import { getCategories, getProducts, getProduct } from './services'
import { BASE_URL } from '../constants/constants'

jest.mock('axios')

describe('Services', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getCategories', () => {
    it('should fetch categories', async () => {
      const mockCategories = [{ _id: '1', name: 'Category1' }]
      axios.get.mockResolvedValueOnce({ data: mockCategories })

      const result = await getCategories()
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/categories`)
      expect(result).toEqual(mockCategories)
    })
  })

  describe('getProducts', () => {
    const mockProducts = [{ _id: 'p1', title: 'Product1' }]

    it('should fetch products without parameters', async () => {
      axios.get.mockResolvedValueOnce({ data: mockProducts })

      const result = await getProducts()
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`, { params: {} })
      expect(result).toEqual(mockProducts)
    })

    it('should fetch products by category', async () => {
      const category = 'some-cat'
      axios.get.mockResolvedValueOnce({ data: mockProducts })

      const result = await getProducts(category)
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`, {
        params: { category },
      })
      expect(result).toEqual(mockProducts)
    })

    it('should fetch products by search query', async () => {
      const searchValue = 'some-search'
      axios.get.mockResolvedValueOnce({ data: mockProducts })

      const result = await getProducts(undefined, searchValue)
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`, {
        params: { search: searchValue },
      })
      expect(result).toEqual(mockProducts)
    })

    it('should fetch products by category and search query', async () => {
      const category = 'cat'
      const searchValue = 'shoes'
      axios.get.mockResolvedValueOnce({ data: mockProducts })

      const result = await getProducts(category, searchValue)
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`, {
        params: { category, search: searchValue },
      })
      expect(result).toEqual(mockProducts)
    })
  })

  describe('getProduct', () => {
    it('should fetch a product by id', async () => {
      const productId = 'p5'
      const mockProduct = { _id: productId, title: 'Product5' }
      axios.get.mockResolvedValueOnce({ data: mockProduct })

      const result = await getProduct(productId)
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products/${productId}`)
      expect(result).toEqual(mockProduct)
    })
  })
})
