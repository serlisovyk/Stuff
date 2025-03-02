import { useQuery } from '@tanstack/react-query'
import { getCategories, getProducts, getProduct } from '../../services/services'

export function useGetCategoriesQuery() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
  return { categories, isLoading }
}

export function useGetProductQuery(productId) {
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
  })

  return { product, isLoading }
}

export function useGetProductsQuery(category = '', searchValue = '') {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products', category, searchValue],
    queryFn: () => getProducts(category, searchValue),
  })

  return { products, isLoading }
}
