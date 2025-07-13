import React from "react"
import logo from '../../img/Logo-2.png'
import logoWebp from '../../img/Logo-2.webp' 
import { HeaderNav, HeaderSection } from "./styles";
import { Intro } from "../SubscriptionForm/styles";

const Header = () => {
    return(
        <>
        <HeaderSection>
            <a href="index.html" rel="noopener, noreferrer">
                <picture>
                    <source srcSet={logoWebp} type="image/webp" />
                    <source srcSet={logo} type="image/png"/>
                    <img src={logoWebp} alt="Logotipo principal de CARAS"/>
                </picture>
            </a>
            <HeaderNav aria-label="redes sociales de Caras" role="navigation">
                <a href="https://www.facebook.com/Revista.Caras" rel="noopener, noreferrer">Facebook</a> | <a href="https://twitter.com/carasmexico" rel="noopener, noreferrer">Twitter</a> | <a href="https://www.instagram.com/carasmexico/" rel="noopener, noreferrer">Instagram</a>
            </HeaderNav>
        </HeaderSection>

        <Intro>
            <h1 tabIndex={0}>Bienvenido a <span lang="en">CARAS</span>: tu ventana exclusiva al mundo del glamour</h1>
            <p tabIndex={0}>Sumérgete en historias detrás de cámaras, tendencias de moda y lo último en cultura y entretenimiento. Con <span lang="en">CARAS</span>, vives cada edición como si estuvieras dentro de la alfombra roja.</p>
        </Intro>
        </>
    )
}

export default Header;