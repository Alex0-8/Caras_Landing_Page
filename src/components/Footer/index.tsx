import React from "react"
import FooterLogoImg from '../../img/Logo-1.png'
import { FooterContainer, FooterNav } from "./styles";

const FooterSection = () => {
    return(
        <FooterContainer>
        <img src={FooterLogoImg} alt="Logotipo de CARAS" />
        <section>
            <p>Síguenos en nuestras redes sociales:</p>
            <FooterNav>      
                <a href="https://www.facebook.com/Revista.Caras">Facebook</a> | <a href="https://twitter.com/carasmexico">Twitter</a> | <a href="https://www.instagram.com/carasmexico/">Instagram</a>
            </FooterNav>
            <p>Contacto: info@caras.com</p>
        </section>
            
        <hr />
        <div>
            <p>EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS. TBG - EDITORIAL TELEVISA - ENTERTAINMENT - NEWS</p>
        </div>
    </FooterContainer>
    )
}

export default FooterSection;