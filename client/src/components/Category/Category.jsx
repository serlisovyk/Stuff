import { useParams } from 'react-router-dom'
import styles from './Category.module.css'
import Products from '../Products/Products'
import {useGetProductsQuery} from '../../state/queries/queries'

export default function Category() {
  const { id } = useParams()

  const { products, isLoading } = useGetProductsQuery(id)

  return (
    <section className={styles.wrapper}>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !products?.length ? (
        <div className={styles.back}>
          <span>No results</span>
        </div>
      ) : (
        <Products
          title={id}
          products={products}
          style={{ padding: 0 }}
          amount={products?.length}
        />
      )}
    </section>
  )
}
