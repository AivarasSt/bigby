import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const Home: NextPage = () => {
  return (
    <div className={styles.hero} >
      <Head>
        <title>BigbyVPN</title>
        <meta name="description" content="Virtual private network - VPN service" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.heroContainer}>
            <span>30 dienų pinigų grąžinimo garantija</span>
            <h1>Jūsų<br /> kibernetinio<br /> saugumo<br /> garantas</h1>
            <div className={styles.center}>
              <span>NUOLAIDOS IKI 65%</span>
              <Link href="/pricing" ><button className={styles.button}>Pasirinkti planą</button></Link>
            </div>
          </div>
          <div className={styles.center}>
            <Image src="/Hero.svg" alt="Saugus naršymas" height="600" width="600" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
