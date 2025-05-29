import React from "react"
import logo from '../../img/Logo-2.png'
import { HeaderNav, HeaderSection } from "./styles";
import { Intro } from "../SubscriptionForm/styles";

const Header = () => {
    return(
        <>
        <HeaderSection>
            <img src={logo} alt="Logotipo principal de CARAS" />
            <HeaderNav>
                <a href="https://www.facebook.com/Revista.Caras">Facebook</a> | <a href="https://twitter.com/carasmexico">Twitter</a> | <a href="https://www.instagram.com/carasmexico/">Instagram</a>
            </HeaderNav>
        </HeaderSection>

        <Intro>
            <h1>¡Suscríbete al Newsletter de CARAS!</h1>
            <h2>Recibe las últimas noticias, tendencias y entrevistas exclusivas directamente en tu correo electrónico.</h2>
        </Intro>
        </>
    )
}

export default Header;