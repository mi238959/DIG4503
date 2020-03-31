import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.css'

const Nav = () => (
  <>
    <Head>
      <title>Lab 9</title>
    </Head>
    <div className={styles.nav}>
      <Link href='/idsearch'>
        <a className={styles.navLink}>ID Search</a>
      </Link>
      <Link href='namesearch'>
        <a className={styles.navLink}>Name Search</a>
      </Link>
      <Link href='typesearch'>
        <a className={styles.navLink}>Type Search</a>
      </Link>
    </div>
  </>
)

export default Nav
