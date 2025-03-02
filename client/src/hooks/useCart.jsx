import { useMemo } from 'react'

export const useCart = (cart = []) =>
  useMemo(() => {
    return cart.reduce((total, { quantity, price }) => total + quantity * price, 0)
  }, [cart])
