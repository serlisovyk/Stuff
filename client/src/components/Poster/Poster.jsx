import styles from '../../pages/Home/Home.module.css'

import bg from '../../images/computer.png'

export default function Poster() {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2024</div>
          <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button type="button" className={styles.button}>
            Shop Now
          </button>
        </div>
        <div className={styles.image}>
          <img src={bg} alt="LENNON r2d2 with NVIDIA 5090 TI" />
        </div>
      </div>
    </section>
  )
}
