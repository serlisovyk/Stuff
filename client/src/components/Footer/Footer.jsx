import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './Footer.module.css'
import { ROUTES } from '../../constants/constants'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Stuff logo" width="61" height="25" />
        </Link>
      </div>
      <div className={styles.rights}>Developed by me</div>
      <div className={styles.socials}>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
      </div>
    </section>
  )
}
