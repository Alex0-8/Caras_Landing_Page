import React from "react";
import { ErrorMsg, FormSection, InputContainer, SubmitFormBtn, SuccessMsg } from "./styles";
import useSubscriptionForm, { SubscriptionData } from "../../hooks/useSubscription";

type Props = {
    onSubscribe: (data: SubscriptionData) => void;
};

const SubscriptionForm = ({ onSubscribe }: Props) => {
    const {form, error, success, handleChange, handleSubmit} = useSubscriptionForm(onSubscribe);

    return(

        <FormSection onSubmit={handleSubmit}>
            <h2 tabIndex={0}>¡Únete a nuestra comunidad!</h2>
            <form aria-label="formulario de suscripción">
                <InputContainer>
                    <label htmlFor="name">Nombre completo</label>
                    <input type="text" name="name" id="name" value={form.name} placeholder="Nombre completo" onChange={handleChange}/>
                </InputContainer>
                
                <InputContainer>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" value={form.email} placeholder="Correo electrónico" onChange={handleChange} />
                </InputContainer>

                <SubmitFormBtn type="submit">Únete a la comunidad CARAS</SubmitFormBtn>
                {success && <SuccessMsg role="status" aria-live="polite">¡Suscripcion Exitosa!</SuccessMsg>}
                {error && <ErrorMsg role="alert" aria-live="polite">{error}</ErrorMsg>}
            </form>
        </FormSection>
      
    )
}

export default SubscriptionForm;