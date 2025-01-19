import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../../services/services'

export default function useGetProductQuery(productId) {
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
  })

  return { product, isLoading }
}
