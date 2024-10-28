import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import useGetCategoriesQuery from '../../state/queries/useGetCategoriesQuery'

export default function Sidebar() {
  const { categories, isLoading } = useGetCategoriesQuery()

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            categories.map(({ _id, name }) => (
              <li key={_id}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`
                  }
                  to={`/categories/${name}`}
                >
                  {name}
                </NavLink>
              </li>
            ))
          )}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: 'underline' }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}
