import styled from "styled-components";

const HeaderSection = styled.header`
    font-weight: 800;
    background-color: #ED1E1E;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > img {
        width: 150px;
        padding: 20px;
    }
`;

const HeaderNav = styled.nav`
    padding: 0 20px;
    display: flex;
    max-width: 100%;
    flex-direction: row-reverse;
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