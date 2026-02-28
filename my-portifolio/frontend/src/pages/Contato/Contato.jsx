import BackgroundCanvas from "../../components/BackgroundCanvas"
import { useTranslation } from "react-i18next";
import styleContato from "../Contato/Contato.module.css"
import EmailContact from "../../components/EmailContact/EmailContact";


 

export default function Contato (){
    const { t } = useTranslation();

    return(
        <>
        <BackgroundCanvas/>
        <div id="text-contact" className = {styleContato.box_contato}>
            <h2 className = {styleContato.h1}>{t("contato.contato-title")}</h2>
            <h6 className = {styleContato.text_contact}>{t("contato.contato-text")}</h6>

            <div id="formas-de-contato">
                <EmailContact/>
            </div>
        </div>
        </>
        
    )
}