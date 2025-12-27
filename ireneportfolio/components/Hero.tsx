import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>Hi, I'm Irene!</h1>
        <p>[add some info here!]</p>
      </div>
    </section>
  )
}
