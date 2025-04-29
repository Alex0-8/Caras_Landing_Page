import React from "react";
import { FormSection, InputContainer, Intro, SubmitFormBtn, SuccesMsg } from "./styles";
import useSubscriptionForm, { SubscriptionData } from "../../hooks/useSubscription";

type Props = {
    onSubscribe: (data: SubscriptionData) => void;
};

const SubscriptionForm = ({ onSubscribe }: Props) => {
    const {form, error, succes, handleChange, handleSubmit} = useSubscriptionForm(onSubscribe);

    return(
        <>
            <Intro>
                <h1>¡Suscríbete al Newsletter de CARAS!</h1>
                <h2>Recibe las últimas noticias, tendencias y entrevistas exclusivas directamente en tu correo electrónico.</h2>
            </Intro>

        <FormSection onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <h3>¡Únete a nuestra comunidad!</h3>
            <form>
                <InputContainer>
                    <label>Nombre completo</label>
                    <input type="text" name="name" value={form.name} placeholder="Nombre completo" onChange={handleChange} required/>
                </InputContainer>
                
                <InputContainer>
                    <label>Correo electrónico</label>
                    <input type="email" name="email" value={form.email} placeholder="Correo electrónico" onChange={handleChange} required/>
                </InputContainer>

                <SubmitFormBtn type="submit">Suscribirme</SubmitFormBtn>
                {succes && <SuccesMsg>¡Suscripcion Exitosa!</SuccesMsg>}

            </form>
        </FormSection>
        </>
    )
}

export default SubscriptionForm;