import { Link } from "react-router-dom";
import logoBrasil from "../../assets/brasil.png";
import logoEua from "../../assets/eua.png";
import logoLg from "../../assets/logoLgQuad.svg"
import stylesHeader from "./Header.module.css";

export default function Header() {
  return (
    <nav className={stylesHeader.header}>
      {/* Nome do Dev / Logo */}
      <div className={stylesHeader.logoDev}>
        <img src={logoLg} alt="logo LG" width={28}  />
        <h5>LUIZ GUSTAVO F. TEIXEIRA</h5>
      </div>

      {/* Navegação */}
      <div className={stylesHeader.navbarBtns}>
        <ul className={stylesHeader.navList}>
          <li>
            <Link to="/home" className={stylesHeader.navLink}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/sobre" className={stylesHeader.navLink}>
              SOBRE
            </Link>
          </li>
          <li>
            <Link to="/habilidades" className={stylesHeader.navLink}>
              HABILIDADES
            </Link>
          </li>
          <li>
            <Link to="/projetos" className={stylesHeader.navLink}>
              PROJETOS
            </Link>
          </li>
          
          {/* Botão de Contato Estilo Pílula */}
          <li>
            <Link to="/contato" className={stylesHeader.navLink}>
              CONTATO
            </Link>
          </li>

          {/* Internacionalização */}
          <li>
            <div className={stylesHeader.langContainer}>
              <button type="button" title="Português">
                <img 
                  className={stylesHeader.langImg} 
                  width={26} 
                  height={26} 
                  src={logoBrasil} 
                  alt="Brasil Flag" 
                />
              </button>
              <button type="button" title="English">
                <img 
                  className={stylesHeader.langImg} 
                  width={26} 
                  height={26} 
                  src={logoEua} 
                  alt="EUA Flag" 
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}