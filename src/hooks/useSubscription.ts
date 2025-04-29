import { ChangeEvent, FormEvent, useState } from "react"

export interface SubscriptionData{
    name: string;
    email: string;
}

const useSubscriptionForm = (submitCallBack: (data: SubscriptionData) => void) => {
    const [form, setForm] = useState<SubscriptionData>({name: '', email: ''});
    const [error, setError] = useState<string | null>(null);
    const [succes, setSucces] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!form.name.trim() || !form.email.trim()) {
            setError("Por favor completa todos los campos");
            return;
        }
        setError(null);
        submitCallBack(form);
        setForm({name: "", email: ""});
        setSucces(true);
    };
    return{form, error, succes, handleChange, handleSubmit};
}

export default useSubscriptionForm;