import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../constants/constants'
import Home from '../../pages/Home/Home'
import SingleProduct from '../../pages/SingleProduct/SingleProduct'
import SingleCategory from '../../pages/SingleCategory/SingleCategory'
import Cart from '../../pages/Cart/Cart'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
  )
}
