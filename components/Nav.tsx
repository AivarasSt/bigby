import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Nav.module.css'; 

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/"><Image src="/Bigby.svg" alt="bigby-logo" height="50px" width="180px" className={styles.logo} /></Link>
        </li>
        <li>
          <Link href="/pricing">Planai</Link>
        </li>
        <li>
          <Link href="/download">Atsisiųsti</Link>
        </li>
        <li>
          <Link href="/what-is-a-vpn">Kas yra VPN?</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav