import React from "react"
import logo from '../../img/Logo-2.png'
import { HeaderNav, HeaderSection } from "./styles";
import { Intro } from "../SubscriptionForm/styles";

const Header = () => {
    return(
        <>
        <HeaderSection>
            <a href="index.html"><img src={logo} alt="Logotipo principal de CARAS"/></a>
            <HeaderNav aria-label="redes sociales de Caras" role="navigation">
                <a href="https://www.facebook.com/Revista.Caras">Facebook</a> | <a href="https://twitter.com/carasmexico">Twitter</a> | <a href="https://www.instagram.com/carasmexico/">Instagram</a>
            </HeaderNav>
        </HeaderSection>

        <Intro>
            <h1 tabIndex={0}>¡Suscríbete al <span lang="en">Newsletter</span> de CARAS!</h1>
            <h2 tabIndex={0}>Recibe las últimas noticias, tendencias y entrevistas exclusivas directamente en tu correo electrónico.</h2>
        </Intro>
        </>
    )
}

export default Header;