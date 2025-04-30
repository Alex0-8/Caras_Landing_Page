import styled from "styled-components";

const FeaturedContainer = styled.section`
    width: 65%;
    display: grid;
    justify-items: center;
    margin: 0 auto;
    box-sizing: border-box;

    & > article h4 {
        font-size: ${props => props.theme.fonts.size.responsive2};
        text-align: center;
        margin-bottom: 10px;
    }

    & > article ul{
        list-style: disc;

        & > li{
            font-size: ${props => props.theme.fonts.size.responsive3};
            margin-bottom: 5px;
        }
    }
`;

const BenefitContainer = styled.article`
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 20px;
    padding: 20px;
`;

const BenefitItem = styled.div`
    & > img{
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    & > h5{
        font-size: clamp(1.25rem, 1.179rem + 0.357vw, 1.5rem);
        font-weight: 600;
        margin-bottom: 7px;
        text-align: center;
    }

    & > p{
        font-size: ${props => props.theme.fonts.size.responsive3};
        line-height: 20px;
    } 
`;

export {
    FeaturedContainer,
    BenefitItem,
    BenefitContainer
}