import axios from 'axios'
import { BASE_URL } from '../constants/constants'

export async function getCategories() {
  const { data } = await axios.get(`${BASE_URL}/categories`)
  return data
}

export async function getProducts(category, searchValue) {
  const params = {}

  if (category) params.category = category
  if (searchValue) params.search = searchValue

  const { data } = await axios.get(`${BASE_URL}/products`, { params })
  return data
}

export async function getProduct(productId) {
  return (await axios.get(`${BASE_URL}/products/${productId}`)).data
}
