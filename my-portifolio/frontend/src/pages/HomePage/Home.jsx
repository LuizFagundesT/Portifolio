import stylesHome from './Home.module.css';
import BackgroundCanvas from '../../components/BackgroundCanvas';
import perfil from '../../assets/logoLgQuad.svg'; 
import Typewriter from 'typewriter-effect';
import { userData } from '../../data/userData'; // Puxando seu nome e dados
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
  return (
    <section className={stylesHome.homeSection}>
      <BackgroundCanvas />
      
      <div className={stylesHome.contentWrapper}>
        {/* LADO ESQUERDO: Texto e Botões */}
        <div className={stylesHome.textContent}>
          <h1 className={stylesHome.devName}>{userData.name}</h1>
          
          <div className={stylesHome.interactiveRow}>
            <span>Eu sou, </span>
            <span className={stylesHome.typewriterText}>
              <Typewriter
                options={{
                  strings: ['Backend Developer', 'Fullstack Developer', 'AI Enthusiast'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </div>

          <div className={stylesHome.buttonGroup}>
            <button className={stylesHome.btnPrimary}>
              <DownloadIcon fontSize="small" /> Baixar currículo
            </button>
            <button className={stylesHome.btnSecondary}>
              Entrar em contato <SendIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* LADO DIREITO: Barra Lateral que encosta no topo/fundo */}
        <aside className={stylesHome.sidebar}>
          <div className={stylesHome.fotoContainer}>
             <img src={perfil} alt="Logo LG" className={stylesHome.perfilImg} />
          </div>
        </aside>
      </div>
    </section>
  );
}