import {
  useCartStore,
  selectCart,
  selectAddItemToCart,
  selectRemoveItemFromCart,
} from '../../state/zustand/useCartStore'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export default function Cart() {
  const cart = useCartStore(selectCart)
  const addItemToCart = useCartStore(selectAddItemToCart)
  const removeItemFromCart = useCartStore(selectRemoveItemFromCart)

  const total = useCart(cart)

  const changeQuantity = (item, quantity) => addItemToCart({ ...item, quantity })

  const handlePlus = item => changeQuantity(item, item.quantity + 1)

  const handleMinus = item =>
    item.quantity > 1
      ? changeQuantity(item, item.quantity - 1)
      : removeItemFromCart(item._id)

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>
      {!cart?.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart?.map(item => {
              const { title, images, price, _id, quantity } = item
              return (
                <div className={styles.item} key={_id}>
                  <Link
                    to={`/products/${_id}`}
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                  </div>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.quantity}>
                    <div className={styles.minus} onClick={() => handleMinus(item)}>
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                        />
                      </svg>
                    </div>
                    <span>{quantity}</span>
                    <div className={styles.plus} onClick={() => handlePlus(item)}>
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.total}>{price * quantity}$</div>
                  <div
                    className={styles.close}
                    onClick={() => removeItemFromCart(_id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.actions}>
            <div className={styles.total}>
              TOTAL PRICE: <span>{total}$</span>
            </div>
            <button type="button" className={styles.proceed}>
              Proceed to checkout
            </button>
          </div>
        </>
      )}
    </section>
  )
}
