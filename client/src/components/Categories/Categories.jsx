import { Link } from 'react-router-dom'
import styles from './Categories.module.css'
import useGetCategoriesQuery from '../../state/queries/useGetCategoriesQuery'

export default function Categories({ title, amount }) {
  
  const { categories, isLoading } = useGetCategoriesQuery()

  const list = categories?.filter((_, i) => i < amount)

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          list?.map(({ _id, name, image }) => {
            return (
              <Link to={`/categories/${name}`} key={_id} className={styles.item}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${image})` }}
                />
                <h3 className={styles.title}>{name}</h3>
              </Link>
            )
          })
        )}
      </div>
    </section>
  )
}
