import React from "react"
import logo from '../../img/Logo-2.png'
import { HeaderNav, HeaderSection } from "./styles";
import { Intro } from "../SubscriptionForm/styles";

const Header = () => {
    return(
        <>
        <HeaderSection>
            <a href="index.html" rel="noopener, noreferrer"><img src={logo} alt="Logotipo principal de CARAS"/></a>
            <HeaderNav aria-label="redes sociales de Caras" role="navigation">
                <a href="https://www.facebook.com/Revista.Caras" rel="noopener, noreferrer">Facebook</a> | <a href="https://twitter.com/carasmexico" rel="noopener, noreferrer">Twitter</a> | <a href="https://www.instagram.com/carasmexico/" rel="noopener, noreferrer">Instagram</a>
            </HeaderNav>
        </HeaderSection>

        <Intro>
            <h1 tabIndex={0}>¡Suscríbete al <span lang="en">Newsletter</span> de CARAS!</h1>
            <p tabIndex={0}>Recibe las últimas noticias, tendencias y entrevistas exclusivas directamente en tu correo electrónico.</p>
        </Intro>
        </>
    )
}

export default Header;