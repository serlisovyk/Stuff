import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from './Product.module.css'
import { useCartStore } from '../../state/zustand/useCartStore'
import { SIZES } from '../../utils/constants'

export default function Product(item) {
  const { title, price, images, description } = item

  const [currentImage, setCurrentImage] = useState()
  const [currentSize, setCurrentSize] = useState()

  const { addItemToCart } = useCartStore()

  useEffect(() => {
    setCurrentImage(images[0])
  }, [images])

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles['images-list']}>
          {images.map((image, i) => (
            <div
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => {
                setCurrentImage(image)
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map(size => (
              <div
                key={size}
                onClick={() => {
                  setCurrentSize(size)
                }}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ''
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button
            type="button"
            onClick={() =>
              addItemToCart({ ...item, size: currentSize, quantity: 1 })
            }
            className={styles.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button type="button" className={styles.favourite}>
            Add to favorites
          </button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>
          <Link to={ROUTES.HOME}>Find in a store</Link>
        </div>
      </div>
    </section>
  )
}
