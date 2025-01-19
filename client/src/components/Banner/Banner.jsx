import styles from '../../pages/Home/Home.module.css'
import banner from '../../images/banner.png'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR <span>SALE</span>
        </p>
        <button type="button" className={styles.more}>
          See more
        </button>
      </div>
      <div className={styles.right} style={{ backgroundImage: `url(${banner})` }}>
        <p className={styles.discount}>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  )
}
