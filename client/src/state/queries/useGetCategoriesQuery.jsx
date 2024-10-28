import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../../services/services'

export default function useGetCategoriesQuery() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
  return { categories, isLoading }
}
