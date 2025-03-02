import { filterByPrice } from './utils'

describe('filterByPrice', () => {
  test('filters products with a price less than maxPrice', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 50 },
      { id: 2, name: 'Product 2', price: 150 },
      { id: 3, name: 'Product 3', price: 99 },
    ]
    const maxPrice = 100
    const result = filterByPrice(products, maxPrice)
    expect(result).toEqual([
      { id: 1, name: 'Product 1', price: 50 },
      { id: 3, name: 'Product 3', price: 99 },
    ])
  })

  test('does not include products with a price equal to maxPrice', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 80 },
    ]
    const maxPrice = 100
    const result = filterByPrice(products, maxPrice)
    expect(result).toEqual([{ id: 2, name: 'Product 2', price: 80 }])
  })

  test('returns an empty array if no products have a price less than maxPrice', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 120 },
      { id: 2, name: 'Product 2', price: 150 },
    ]
    const maxPrice = 100
    const result = filterByPrice(products, maxPrice)
    expect(result).toEqual([])
  })

  test('returns undefined if products is undefined', () => {
    const result = filterByPrice(undefined, 100)
    expect(result).toBeUndefined()
  })

  test('returns an empty array if products is empty', () => {
    const result = filterByPrice([], 100)
    expect(result).toEqual([])
  })
})
