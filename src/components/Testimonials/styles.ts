import styled from "styled-components";

const CommentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.colorBorder};
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
`;

const PorfileImg = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-right: 16px;
    border-radius: 50%;
    overflow: hidden;

    & > img {
        width: 100%;
        object-fit: cover;
    }
`;

const CommentContent = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        & > h6 {
            font-size: ${props => props.theme.fonts.size.responsive1};
            font-weight: 600;
            color: ${props => props.theme.colors.txtUserName};
            margin: 0;
        }
    }

    & > p {
        font-size: clamp(0.813rem, 0.741rem + 0.357vw, 1.063rem);
        color: ${props => props.theme.colors.txtTertiary};
        margin: 0;
    }
`;

export {
    CommentContainer,
    PorfileImg,
    CommentContent
}