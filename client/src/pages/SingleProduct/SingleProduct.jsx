import { useParams } from 'react-router-dom'
import Product from '../../components/Product/Product'
import Products from '../../components/Products/Products'
import useGetProductsQuery from '../../state/queries/useGetProductsQuery'
import useGetProductQuery from '../../state/queries/useGetProductQuery'

export default function SingleProduct() {
  const { id } = useParams()

  const { product, isLoading } = useGetProductQuery(id)

  const { products } = useGetProductsQuery(product?.category)

  return isLoading ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...product} />
      <Products products={products} amount={10} title="Related products" />
    </>
  )
}
