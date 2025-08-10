import type { FC } from "react";
import styles from "./Header.module.css";
import LogoSVG from "../LogoSVG";


interface HeaderProps {
  roleName: string;
}

const Header: FC<HeaderProps> = ({roleName}) => {

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Панель {roleName}</h1>
        <LogoSVG/>
      </div>
    </>
  )
}

export default Header