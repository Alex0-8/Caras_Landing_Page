import React from "react";
import { ErrorMsg, FormSection, InputContainer, Intro, SubmitFormBtn, SuccessMsg } from "./styles";
import useSubscriptionForm, { SubscriptionData } from "../../hooks/useSubscription";

type Props = {
    onSubscribe: (data: SubscriptionData) => void;
};

const SubscriptionForm = ({ onSubscribe }: Props) => {
    const {form, error, success, handleChange, handleSubmit} = useSubscriptionForm(onSubscribe);

    return(
        <>
            <Intro>
                <h1>¡Suscríbete al Newsletter de CARAS!</h1>
                <h2>Recibe las últimas noticias, tendencias y entrevistas exclusivas directamente en tu correo electrónico.</h2>
            </Intro>

        <FormSection onSubmit={handleSubmit}>
            <h3>¡Únete a nuestra comunidad!</h3>
            <form>
                <InputContainer>
                    <label>Nombre completo</label>
                    <input type="text" name="name" value={form.name} placeholder="Nombre completo" onChange={handleChange}/>
                </InputContainer>
                
                <InputContainer>
                    <label>Correo electrónico</label>
                    <input type="email" name="email" value={form.email} placeholder="Correo electrónico" onChange={handleChange} />
                </InputContainer>

                <SubmitFormBtn type="submit">Suscribirme</SubmitFormBtn>
                {success && <SuccessMsg>¡Suscripcion Exitosa!</SuccessMsg>}
                {error && <ErrorMsg>{error}</ErrorMsg>}
            </form>
        </FormSection>
        </>
    )
}

export default SubscriptionForm;