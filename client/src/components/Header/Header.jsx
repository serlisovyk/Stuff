import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './Header.module.css'
import { ROUTES } from '../../utils/routes'
import useGetProductsQuery from '../../state/queries/useGetProductsQuery'
import { useCartStore } from '../../state/zustand/useCartStore'

export default function Header() {
  const [searchValue, setSearchValue] = useState('')

  const { cart } = useCartStore()

  const { products, isLoading } = useGetProductsQuery('', '', searchValue)

  const handleSearch = e => setSearchValue(e.target.value)

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Stuff logo" width="78" height="32" />
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.icon}>
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
          </svg>
        </div>
        <div className={styles.input}>
          <label htmlFor="search"></label>
          <input
            id="search"
            type="search"
            name="search"
            placeholder="Search for anything..."
            autoComplete="off"
            onChange={handleSearch}
            value={searchValue}
          />
        </div>
        {searchValue && (
          <div className={styles.box}>
            {isLoading
              ? 'Loading...'
              : !products?.length
              ? 'No results'
              : products.map(({ title, images, id }) => {
                  return (
                    <Link
                      key={id}
                      to={`/products/${id}`}
                      className={styles.item}
                      onClick={() => setSearchValue('')}
                    >
                      <div
                        className={styles.image}
                        style={{
                          backgroundImage: `url(${images[0]})`,
                        }}
                      />
                      <div className={styles.title}>{title}</div>
                    </Link>
                  )
                })}
          </div>
        )}
      </form>
      <div className={styles.account}>
        <Link to={ROUTES.HOME} className={styles.favourites}>
          <svg className={styles['icon-fav']}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
          </svg>
        </Link>
        <Link to={ROUTES.CART} className={styles.cart}>
          <svg className={styles['icon-cart']}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
          </svg>
          {!!cart.length && <span className={styles.count}>{cart.length}</span>}
        </Link>
      </div>
    </div>
  )
}
