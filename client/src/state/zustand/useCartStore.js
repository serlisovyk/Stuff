import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useCartStore = create(
  immer(set => ({
    cart: [],

    addItemToCart: item =>
      set(state => ({
        cart: updateCart(state.cart, item),
      })),

    removeItemFromCart: _id =>
      set(state => ({
        cart: removeFromCart(state.cart, _id),
      })),
  }))
)

export const selectCart = state => state.cart
export const selectAddItemToCart = state => state.addItemToCart
export const selectRemoveItemFromCart = state => state.removeItemFromCart

const updateCart = (cart, item) => {
  const found = cart.find(cartItem => cartItem._id === item._id)

  if (found) {
    if (item.quantity <= 0) {
      return cart.filter(cartItem => cartItem._id !== item._id)
    }

    return cart.map(cartItem =>
      cartItem._id === item._id ? { ...cartItem, quantity: item.quantity } : cartItem
    )
  }

  return [...cart, { ...item, quantity: 1 }]
}

const removeFromCart = (cart, _id) => cart.filter(item => item._id !== _id)
