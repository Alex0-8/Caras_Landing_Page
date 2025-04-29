import styled from "styled-components";

const Intro = styled.section`
    width: 75%;
    margin: 0 auto;
    text-align: center;
    padding: 50px 20px;
    border-radius: 15px;

    & > h1 {
        font-size: clamp(1.938rem, 1.777rem + 0.804vw, 2.5rem);
        margin-bottom: 10px;
    }
    
    & > h2 {
        font-size: ${props => props.theme.fonts.size.responsive1};
    }

    @media screen and (max-width: 450px){
        width: 100%;
    }
`;

const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 1.375rem;
    text-align: center;
    padding: 30px 20px;

    & > h3{
        font-size: ${props => props.theme.fonts.size.responsive2};
        margin-bottom: 20px;
    }
`;

const FormSubmit = styled.form`
    display: inline-block;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;

    & > label{
        font-weight: 600;
    }

    & > input{
        font-size: 1rem;
        border: 3px solid #00000069;
        border-radius: 8px;
        transition: all .3s ease;

        &:focus{
            border: 3px solid #ff0b00;
            outline: none;
            box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
        }
    }
`;

const SubmitFormBtn = styled.button`
    padding: 10px;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.txtSecondary};
    background-color: #ef4138;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;   
    font-family: ${props => props.theme.fonts.barlowBold};
    transition: all .3s ease;
    margin-bottom: 10px;

    &:hover {
        background-color: #ff0b00;
        box-shadow: 0 4px 6px #0000004d;
        transform: scale(1.05);
    }
`;

const SuccesMsg = styled.p`
    border: 3px solid #25ff11;
    border-radius: 8px;
    padding: 7px;
`;

export {
    Intro,
    FormSection,
    FormSubmit,
    InputContainer,
    SubmitFormBtn,
    SuccesMsg
}