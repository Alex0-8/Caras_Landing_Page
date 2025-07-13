import styled from "styled-components";

const HeaderSection = styled.header`
    font-weight: 800;
    background-color: ${props => props.theme.colors.backgroundPrimary};
    color: #fff;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & a > picture img {
        width: 150px;
        padding: 20px;
    }

    @media screen and (max-width: 450px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const HeaderNav = styled.nav`
    padding: 0 20px;
    display: flex;
    max-width: 100%;
    gap: 8px;

    & > a {
        color: #fff;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
`;

export {
    HeaderSection,
    HeaderNav
}