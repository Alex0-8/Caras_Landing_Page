import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: ${props => props.theme.colors.backgroundFooter};
    padding: 20px 0 20px 0;
    text-align: center;
    margin-top: 20px;

    & > picture img {
        width: 150px;
        padding: 20px;
    }

    & > section p {
        font-size: clamp(1rem, 0.929rem + 0.357vw, 1.25rem)
    }

    & > div p{
        font-size: clamp(0.75rem, 0.661rem + 0.446vw, 1.063rem)
    }

    @media screen and (max-width: 450px) {
        div {
            width: 80%;
            margin: 0 auto;
        }
    }
`;

const FooterNav = styled.nav`
    & > a {
        text-decoration: none;
        margin: 0 10px;

        @media (hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export {
    FooterContainer,
    FooterNav
}