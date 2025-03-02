import { BASE_URL, SIZES, ROUTES } from './constants'

describe('Constants', () => {
  it('should have the correct BASE_URL', () => {
    expect(BASE_URL).toBe('https://stuff-server-8gbm.onrender.com')
  })

  it('should have the correct SIZES array', () => {
    expect(SIZES).toEqual([4, 4.5, 5])
  })

  it('should have the correct ROUTES object', () => {
    expect(ROUTES).toEqual({
      HOME: '/',
      CART: '/cart',
      PROFILE: '/profile',
      CATEGORY: '/categories/:id',
      PRODUCT: '/products/:id',
    })
  })
})
