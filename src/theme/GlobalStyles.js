import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Playfair';
        src: url('/fonts/Playfair-display-Regular.ttf');
    }

    @font-face {
        font-family: 'Barlow-bold';
        src: url('/fonts/Barlow-bold.ttf');
    }

    @font-face {
        font-family: 'Barlow-light';
        src: url('/fonts/Barlow-light.ttf');
    }

    ${reset}

    *{
        box-sizing: border-box;
    }

    body {
        font-family: ${props => props.theme.fonts.playfair};
        color: ${props => props.theme.colors.txtPrimary};

        main{
            padding: 7px;
        }
    }
`;

export default GlobalStyles;