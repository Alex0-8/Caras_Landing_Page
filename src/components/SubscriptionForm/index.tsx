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
      
    )
}

export default SubscriptionForm;