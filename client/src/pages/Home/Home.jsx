import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import Poster from '../../components/Poster/Poster'
import Products from '../../components/Products/Products'
import {useGetProductsQuery} from '../../state/queries/queries'
import { filterByPrice } from '../../utils/utils'

export default function Home() {
  const { products } = useGetProductsQuery()

  const filteredProducts = filterByPrice(products, 100)

  return (
    <>
      <Poster />
      <Products products={products} amount={5} title="Trending" />
      <Categories amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filteredProducts} amount={5} title="Less than 100$" />
    </>
  )
}
