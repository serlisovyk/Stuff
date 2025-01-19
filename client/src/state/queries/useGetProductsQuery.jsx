import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/services'

export default function useGetProductsQuery(category = '', searchValue = '') {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products', category, searchValue],
    queryFn: () => getProducts(category, searchValue),
  })

  return { products, isLoading }
}
