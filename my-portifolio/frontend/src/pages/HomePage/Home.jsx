import stylesHome from './Home.module.css'
import BackgroundCanvas from '../../components/BackgroundCanvas'
import perfil from '../../assets/logoLgQuad.svg' 
export default function Home(){
    return(
        <>
            <BackgroundCanvas/>
            <div id='container-home'>
                <div id='fundo-lateral-esq' className={stylesHome.fundoLateralEsq} >
                    
                </div>
                <div id='foto-dev' className= {stylesHome.fotodev}>
                     <img src={perfil} alt="" width={300} height={600}/>
                </div>
            </div>
        </>
    )
}