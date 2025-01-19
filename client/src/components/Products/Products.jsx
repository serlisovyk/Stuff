import { Link } from 'react-router-dom'

import styles from './Products.module.css'

export default function Products({ title, style = {}, products, amount }) {
  const filteredProducts = products?.filter((_, i) => i < amount)

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {filteredProducts?.map(({ _id, images, title, categoryName, price }) => (
          <Link
            to={`/products/${_id}`}
            key={_id}
            className={styles.product}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${images[0]})` }}
            />
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.cat}>{categoryName}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.oldPrice}>{Math.floor(price * 0.8)}$</div>
                </div>
                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} people purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
