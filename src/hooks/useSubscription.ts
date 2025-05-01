import { ChangeEvent, FormEvent, useState } from "react"

export interface SubscriptionData{
    name: string;
    email: string;
}

const useSubscriptionForm = (submitCallBack: (data: SubscriptionData) => void) => {
    const [form, setForm] = useState<SubscriptionData>({name: '', email: ''});
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccesss] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // funcion que actualiza el estado del formulario
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: FormEvent) => { // funcion que controla los datos del formulario
        e.preventDefault();
        if(!form.name.trim() || !form.email.trim()) {
            setError("Por favor completa todos los campos");
            return;
        }

        if(form.name.length < 3){
            setError("Nombre demasiado corto");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(form.email)){
            setError("Correo electronico no valido");
            return;
        }

        setError(null);
        submitCallBack(form);
        setForm({name: "", email: ""});
        setSuccesss(true);

        setTimeout(() => { // quita el mensaje de exito despues de tres segundos
            setSuccesss(false)
        }, 3000);
    };
    return{form, error, success, handleChange, handleSubmit};
}

export default useSubscriptionForm;