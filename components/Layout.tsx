import { ReactNode } from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
        <main className={styles.main}>
          {children}
        </main>
    </div>
  )
}

export default Layout