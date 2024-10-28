import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export async function getCategories() {
  const { data } = await axios.get(`${BASE_URL}/categories`)
  return data
}

export async function getProducts(category, productId, searchValue) {
  if (productId) return (await axios.get(`${BASE_URL}/products/${productId}`)).data

  const params = {}

  if (category) params.category = category
  if (searchValue) params.search = searchValue

  const { data } = await axios.get(`${BASE_URL}/products`, { params })
  return data
}
