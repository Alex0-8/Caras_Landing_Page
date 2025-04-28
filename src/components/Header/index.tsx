import React from "react"
import logo from '../../img/Logo-2.png'
import { HeaderNav, HeaderSection } from "./styles";

const Header = () => {
    return(
        <HeaderSection>
            <img src={logo} alt="Logotipo principal de CARAS" />
            <HeaderNav>
                <a href="https://www.facebook.com/Revista.Caras">Facebook</a> | <a href="https://twitter.com/carasmexico">Twitter</a> | <a href="https://www.instagram.com/carasmexico/">Instagram</a>
            </HeaderNav>
        </HeaderSection>
    )
}

export default Header;