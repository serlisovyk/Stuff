import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useCartStore = create(
  immer(set => ({
    cart: [],

    addItemToCart: item =>
      set(state => {
        let newCart = [...state.cart]
        const found = state.cart.find(cartItem => cartItem._id === item._id)

        found
          ? (newCart = newCart.map(cartItem =>
              cartItem._id === item._id
                ? { ...cartItem, quantity: item.quantity }
                : cartItem
            ))
          : newCart.push({ ...item, quantity: 1 })

        state.cart = newCart
      }),

    removeItemFromCart: _id =>
      set(state => ({ cart: state.cart.filter(item => item._id !== _id) })),
  }))
)
