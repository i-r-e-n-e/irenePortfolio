import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">Irene Chen</Link>
      </div>
      <nav className={styles.right}>
        <Link href="/">About</Link>
        <Link href="/about">Projects</Link>
        <Link href="/projects">Contact</Link>
      </nav>
    </header>
  )
}
