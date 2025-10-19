import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>My Portfolio</h1>
      <div className={styles.field}>
        {/* Field Markings */}
        <div className={styles.centerLine}></div>
        <div className={styles.centerCircle}></div>

        {/* Coach */}
        <Link href="/blog" className={`${styles.coach}`}>
          監
        </Link>

        {/* Players (4-3-3) */}
        {/* Goalkeeper */}
        <Link href="#" className={`${styles.player} ${styles.gk}`}>GK</Link>
        
        {/* Defenders */}
        <Link href="#" className={`${styles.player} ${styles.df1}`}>DF</Link>
        <Link href="#" className={`${styles.player} ${styles.df2}`}>DF</Link>
        <Link href="#" className={`${styles.player} ${styles.df3}`}>DF</Link>
        <Link href="#" className={`${styles.player} ${styles.df4}`}>DF</Link>

        {/* Midfielders */}
        <Link href="#" className={`${styles.player} ${styles.mf1}`}>MF</Link>
        <Link href="#" className={`${styles.player} ${styles.mf2}`}>MF</Link>
        <Link href="#" className={`${styles.player} ${styles.mf3}`}>MF</Link>

        {/* Forwards */}
        <Link href="#" className={`${styles.player} ${styles.fw1}`}>FW</Link>
        <Link href="#" className={`${styles.player} ${styles.fw2}`}>FW</Link>
        <Link href="#" className={`${styles.player} ${styles.fw3}`}>FW</Link>
      </div>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        監督（監）をクリックするとブログページへ移動します。
      </p>
    </main>
  );
}