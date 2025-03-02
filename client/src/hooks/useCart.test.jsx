import { renderHook } from '@testing-library/react'
import { useCart } from './useCart'

describe('useCart', () => {
  const singleItem = { quantity: 1, price: 100 }
  const doubleItem = { quantity: 2, price: 50 }

  test('calculates total price correctly for a non-empty cart', () => {
    const products = [
      { quantity: 2, price: 10 },
      { quantity: 3, price: 5 },
    ]
    const { result } = renderHook(() => useCart(products))
    const expectedTotal = 2 * 10 + 3 * 5
    expect(result.current).toBe(expectedTotal)
  })

  test('updates the total when the cart changes', () => {
    const { result, rerender } = renderHook(({ cart }) => useCart(cart), {
      initialProps: { cart: [singleItem] },
    })
    expect(result.current).toBe(singleItem.quantity * singleItem.price)

    rerender({ cart: [singleItem, doubleItem] })
    const expectedTotal =
      singleItem.quantity * singleItem.price + doubleItem.quantity * doubleItem.price
    expect(result.current).toBe(expectedTotal)
  })

  test('returns 0 for an empty cart', () => {
    const { result } = renderHook(() => useCart([]))
    expect(result.current).toBe(0)
  })

  test('returns 0 if cart is undefined', () => {
    const { result } = renderHook(() => useCart(undefined))
    expect(result.current).toBe(0)
  })
})
