import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/services'

export default function useGetProductsQuery(category, productId, searchValue) {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products', category, productId, searchValue],
    queryFn: () => getProducts(category, productId, searchValue),
  })

  return { products, isLoading }
}
