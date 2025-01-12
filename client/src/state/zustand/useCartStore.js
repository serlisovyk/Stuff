import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// Utility for updating the cart
const updateCart = (cart, item) => {
  const found = cart.find(cartItem => cartItem._id === item._id)

  if (found) {
    if (item.quantity <= 0) {
      // If the quantity is less than or equal to 0, remove the item
      return cart.filter(cartItem => cartItem._id !== item._id)
    }

    // Update the quantity of the existing item
    return cart.map(cartItem =>
      cartItem._id === item._id ? { ...cartItem, quantity: item.quantity } : cartItem
    )
  }

  // If the item is not in the cart, add it with a quantity of 1
  return [...cart, { ...item, quantity: 1 }]
}

// Utility for removing an item from the cart
const removeFromCart = (cart, _id) => cart.filter(item => item._id !== _id)

export const useCartStore = create(
  immer(set => ({
    cart: [],

    // Method for adding an item to the cart
    addItemToCart: item =>
      set(state => ({
        cart: updateCart(state.cart, item),
      })),

    // Method for removing an item from the cart
    removeItemFromCart: _id =>
      set(state => ({
        cart: removeFromCart(state.cart, _id),
      })),
  }))
)

// Selectors
export const selectCart = state => state.cart
export const selectAddItemToCart = state => state.addItemToCart
export const selectRemoveItemFromCart = state => state.removeItemFromCart
