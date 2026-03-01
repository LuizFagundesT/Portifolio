import stylesHome from './Home.module.css';
import BackgroundCanvas from '../../components/BackgroundCanvas';
// import perfil from '../../assets/logoLgQuad.svg'; 
import Typewriter from 'typewriter-effect';
import { userData } from '../../data/userData'; // Puxando seu nome e dados
import { useNavigate } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import SpotifyPlayer from '../../components/SpotifyPlayer';

export default function Home() {

  const navigate = useNavigate();
  return (

    <section className={stylesHome.homeSection}>
      <BackgroundCanvas />
      <div className={stylesHome.spotifyWrapper}>
        <SpotifyPlayer linkMusica={"https://open.spotify.com/embed/track/3GCdLUSnKSMJhs4Tj6CV3s?utm_source=generator"}/>
      </div>
      
      <div className={stylesHome.contentWrapper}>
        {/* LADO ESQUERDO: Texto e Botões */}
        <div className={stylesHome.textContent}>
          <h1 className={stylesHome.devName}>{userData.name}</h1>
          
          <div className={stylesHome.interactiveRow}>
            <span>Eu sou, </span>
            <span className={stylesHome.typewriterText}>
              <Typewriter
                options={{
                  strings: ['Backend Developer', 'Python Developer', 'AI Enthusiast', 'Apaixonado ppor música'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </div>
          
          <div className={stylesHome.buttonGroup}>
            <a className = {stylesHome.a}href={userData.curriculo} download="Luiz_Gustavo_Curriculo.pdf">
              <button className={stylesHome.btnPrimary}>
                <DownloadIcon fontSize="small" /> Baixar currículo
              </button>
            </a>
            <button className={stylesHome.btnSecondary} onClick={()=>{navigate("/contato")}}>
              Entrar em contato <SendIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* LADO DIREITO: Barra Lateral que encosta no topo/fundo */}
        {/* <aside className={stylesHome.sidebar}>
          <div className={stylesHome.fotoContainer}>
             <img src={perfil} alt="Logo LG" className={stylesHome.perfilImg} />
          </div>
        </aside> */}
      </div>
      
    </section>
    
    
  );
}