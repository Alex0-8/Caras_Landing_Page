import React from "react"
import FooterLogoImg from '../../img/Logo-1.png';
import FooterLogoImgWebp from '../../img/Logo-1.webp';
import { FooterContainer, FooterNav } from "./styles";

const FooterSection = () => {
    return(
        <FooterContainer>
            <picture>
                <source srcSet={FooterLogoImg} type="image/png"/>
                <source srcSet={FooterLogoImgWebp} type="image/webp"/>
                <img src={FooterLogoImgWebp} alt="Logotipo de CARAS" loading="lazy"/>
            </picture>
        <section>
            <p tabIndex={0}>Síguenos en nuestras redes sociales:</p>
            <FooterNav role="navigation">      
                <a href="https://www.facebook.com/Revista.Caras" rel="noopener, noreferrer">Facebook</a> | <a href="https://twitter.com/carasmexico" rel="noopener, noreferrer">Twitter</a> | <a href="https://www.instagram.com/carasmexico/" rel="noopener, noreferrer">Instagram</a>
            </FooterNav>
            <p>Contacto: info@caras.com</p>
        </section>
            
        <hr />
        <div>
            <p>EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS. TBG - EDITORIAL TELEVISA - <span lang="en">ENTERTAINMENT - NEWS</span></p>
        </div>
    </FooterContainer>
    )
}

export default FooterSection;