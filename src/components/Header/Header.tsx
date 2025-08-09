import type { FC } from "react";
import "./Header.css";
import LogoSVG from "../LogoSVG";


interface HeaderProps {
  roleName: string;
}

const Header: FC<HeaderProps> = ({roleName}) => {

  return (
    <>
      <div className="header">
        <h1 className="header-title">Панель {roleName}</h1>
        <LogoSVG/>
      </div>
    </>
  )
}

export default Header