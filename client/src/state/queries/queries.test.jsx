import React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getCategories, getProduct, getProducts } from '../../services/services'
import {
  useGetCategoriesQuery,
  useGetProductQuery,
  useGetProductsQuery,
} from './queries'

jest.mock('../../services/services')

describe('Queries', () => {
  function createTestQueryClient() {
    return new QueryClient({
      defaultOptions: {
        queries: {
          // Disable retries, so that in case of an error
          // we immediately get the final status
          retry: false,
          // Disable caching, so each test starts "from scratch"
          cacheTime: 0,
          staleTime: 0,
        },
      },
    })
  }

  function createWrapper() {
    const queryClient = createTestQueryClient()
    return ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('useGetCategoriesQuery', () => {
    it('should return categories data on success', async () => {
      const mockCategories = [{ _id: '1', name: 'Category1' }]
      getCategories.mockResolvedValueOnce(mockCategories)

      const { result } = renderHook(() => useGetCategoriesQuery(), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      await waitFor(() => expect(result.current.isLoading).toBe(false))
      expect(result.current.categories).toEqual(mockCategories)
    })

    it('should handle error case properly', async () => {
      const errorMessage = 'Error fetching categories'
      getCategories.mockRejectedValueOnce(new Error(errorMessage))

      const { result } = renderHook(() => useGetCategoriesQuery(), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      await waitFor(() => expect(result.current.isLoading).toBe(false))
      expect(result.current.categories).toBeUndefined()
    })
  })

  describe('useGetProductQuery', () => {
    it('should return product data on success', async () => {
      const mockProduct = { _id: 'p5', title: 'Product5' }
      getProduct.mockResolvedValueOnce(mockProduct)

      const { result } = renderHook(() => useGetProductQuery('p5'), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      await waitFor(() => expect(result.current.isLoading).toBe(false))
      expect(result.current.product).toEqual(mockProduct)
    })

    it('should handle error case properly', async () => {
      const errorMessage = 'Error fetching product'
      getProduct.mockRejectedValueOnce(new Error(errorMessage))

      const { result } = renderHook(() => useGetProductQuery('p5'), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      await waitFor(() => expect(result.current.isLoading).toBe(false))
      expect(result.current.product).toBeUndefined()
    })
  })

  describe('useGetProductsQuery', () => {
    it('should return products data on success', async () => {
      const mockProducts = [{ _id: 'p1', title: 'Product1' }]
      getProducts.mockResolvedValueOnce(mockProducts)

      const { result } = renderHook(() => useGetProductsQuery('cat', 'shoes'), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      await waitFor(() => expect(result.current.isLoading).toBe(false))
      expect(result.current.products).toEqual(mockProducts)
    })

    it('should handle error case properly', async () => {
      const errorMessage = 'Error fetching products'
      getProducts.mockRejectedValueOnce(new Error(errorMessage))

      const { result } = renderHook(() => useGetProductsQuery('cat', 'shoes'), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      await waitFor(() => expect(result.current.isLoading).toBe(false))
      expect(result.current.products).toBeUndefined()
    })

    it('should call with default empty strings when no args provided', async () => {
      const mockProducts = [{ _id: 'p1', title: 'No Category' }]
      getProducts.mockResolvedValueOnce(mockProducts)

      const { result } = renderHook(() => useGetProductsQuery(), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      await waitFor(() => expect(result.current.isLoading).toBe(false))
      expect(result.current.products).toEqual(mockProducts)
      expect(getProducts).toHaveBeenCalledWith('', '')
    })
  })
})
