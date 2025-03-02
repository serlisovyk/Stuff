import { act } from '@testing-library/react'
import {
  useCartStore,
  selectCart,
  selectAddItemToCart,
  selectRemoveItemFromCart,
} from './useCartStore'

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ cart: [] })
  })

  it('adds a new item with quantity=1 if not found in cart', () => {
    const item = { _id: '1', title: 'Test Product', quantity: 5 }

    act(() => useCartStore.getState().addItemToCart(item))

    const cart = useCartStore.getState().cart
    expect(cart).toHaveLength(1)

    // Сheck that in the end the quantity = 1, even if 5 was transferred
    expect(cart[0]).toEqual({ ...item, quantity: 1 })
  })

  it('updates quantity if item is already in cart', () => {
    const item = { _id: '1', title: 'Test Product', quantity: 1 }

    act(() => {
      useCartStore.setState({ cart: [item] })
      useCartStore.getState().addItemToCart({ ...item, quantity: 3 })
    })

    const cart = useCartStore.getState().cart
    expect(cart).toHaveLength(1)
    expect(cart[0].quantity).toBe(3)
  })

  it('removes item if updated quantity <= 0', () => {
    const item = { _id: '1', title: 'Test Product', quantity: 2 }

    act(() => {
      useCartStore.setState({ cart: [item] })
      useCartStore.getState().addItemToCart({ ...item, quantity: 0 })
    })

    const cart = useCartStore.getState().cart
    expect(cart).toHaveLength(0)
  })

  it('removes item from cart by _id', () => {
    const item1 = { _id: '1', title: 'Test Product 1', quantity: 2 }
    const item2 = { _id: '2', title: 'Test Product 2', quantity: 1 }

    act(() => {
      useCartStore.setState({ cart: [item1, item2] })
      useCartStore.getState().removeItemFromCart('1')
    })

    const cart = useCartStore.getState().cart
    expect(cart).toHaveLength(1)
    expect(cart[0]._id).toBe('2')
  })

  it('updates quantity for one of multiple items in the cart', () => {
    const item1 = { _id: '1', title: 'Test Product 1', quantity: 2 }
    const item2 = { _id: '2', title: 'Test Product 2', quantity: 3 }

    act(() => {
      useCartStore.setState({ cart: [item1, item2] })
      useCartStore.getState().addItemToCart({ ...item2, quantity: 5 })
    })

    const cart = useCartStore.getState().cart
    expect(cart).toHaveLength(2)

    expect(cart[0]).toEqual(item1)
    expect(cart[1].quantity).toBe(5)
  })

  describe('selectors', () => {
    it('selectCart should return the current cart', () => {
      act(() => {
        useCartStore.setState({ cart: [{ _id: '1', quantity: 2 }] })
      })
      const state = useCartStore.getState()
      expect(selectCart(state)).toEqual([{ _id: '1', quantity: 2 }])
    })

    it('selectAddItemToCart should return the addItemToCart function', () => {
      const state = useCartStore.getState()
      const addItem = selectAddItemToCart(state)
      expect(typeof addItem).toBe('function')
    })

    it('selectRemoveItemFromCart should return the removeItemFromCart function', () => {
      const state = useCartStore.getState()
      const removeItem = selectRemoveItemFromCart(state)
      expect(typeof removeItem).toBe('function')
    })
  })
})
