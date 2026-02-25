import { useState } from "react";
import { Link } from "react-router-dom";
import logoBrasil from "../../assets/brasil.png";
import logoEua from "../../assets/eua.png";
import logoLg from "../../assets/logoLgQuad.svg";
import stylesHeader from "./Header.module.css";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={stylesHeader.header}>
      
      <div className={stylesHeader.logoDev}>
        <img src={logoLg} alt="logo LG" width={28} />
        <h5>LUIZ GUSTAVO F. TEIXEIRA</h5>
      </div>

      {/* BOTÃO HAMBURGUER */}
      <div 
        className={stylesHeader.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <div className={`${stylesHeader.navbarBtns} ${menuOpen ? stylesHeader.active : ""}`}>
        <ul className={stylesHeader.navList}>
          <li><Link to="/home" className={stylesHeader.navLink}>HOME</Link></li>
          <li><Link to="/sobre" className={stylesHeader.navLink}>SOBRE</Link></li>
          <li><Link to="/habilidades" className={stylesHeader.navLink}>HABILIDADES</Link></li>
          <li><Link to="/projetos" className={stylesHeader.navLink}>PROJETOS</Link></li>
          <li><Link to="/contato" className={stylesHeader.navLink}>CONTATO</Link></li>

          <li>
            <div className={stylesHeader.langContainer}>
              <button type="button">
                <img className={stylesHeader.langImg} width={26} src={logoBrasil} alt="Brasil" />
              </button>
              <button type="button">
                <img className={stylesHeader.langImg} width={26} src={logoEua} alt="EUA" />
              </button>
            </div>
          </li>
        </ul>
      </div>

    </nav>
  );
}