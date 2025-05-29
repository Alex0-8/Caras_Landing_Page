import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import SubscriptionForm from "../components/SubscriptionForm";

const componentRender = (ui) => {
    return render(
        <ThemeProvider theme={Theme}>
            {ui}
        </ThemeProvider>
    );
}

describe('testing the subscription form component', () => {
    it('should render the base of the form correctly', () => {
        componentRender(<SubscriptionForm />)

        expect(screen.getByPlaceholderText('Nombre completo')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByText('Suscribirme')).toBeInTheDocument();
    });

    it('should show the error name too short', () => {
        componentRender(<SubscriptionForm />)

        const nameInput = screen.getByPlaceholderText('Nombre completo');
        fireEvent.change(nameInput, {target: {value: 'P'}});

        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        fireEvent.change(emailInput, {target: {value: 'paco@gmail.com'}})

        expect(screen.getByDisplayValue('P')).toBeInTheDocument();

        const subscribeBtn = screen.getByText('Suscribirme');
        fireEvent.click(subscribeBtn);

        expect(screen.getByText('Nombre demasiado corto')).toBeInTheDocument();
    });

    it('should show the invalid email message', () => {
        componentRender(<SubscriptionForm />)

        const nameInput = screen.getByPlaceholderText('Nombre completo');
        fireEvent.change(nameInput, {target: {value: 'Paco'}});

        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        fireEvent.change(emailInput, {target: {value: 'pa@gm'}})

        const subscribeBtn = screen.getByText('Suscribirme');
        fireEvent.click(subscribeBtn);

        expect(screen.getByText('Correo electronico no valido')).toBeInTheDocument();
    });

    it('should show the "Por favor completa todos los campos" message', () => {
        componentRender(<SubscriptionForm />);

        const subscribeBtn = screen.getByText('Suscribirme');
        fireEvent.click(subscribeBtn);

        expect(screen.getByText('Por favor completa todos los campos')).toBeInTheDocument();
    });

    it('should show an succes message', () => {
        const mockSub = jest.fn()
        componentRender(<SubscriptionForm onSubscribe={mockSub} />)

        const nameInput = screen.getByPlaceholderText('Nombre completo');
        fireEvent.change(nameInput, {target: {value: 'Paco'}});

        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        fireEvent.change(emailInput, {target: {value: 'paco@gmail.com'}})

        expect(screen.getByDisplayValue('Paco')).toBeInTheDocument();

        const subscribeBtn = screen.getByText('Suscribirme');
        fireEvent.click(subscribeBtn);

        expect(mockSub).toHaveBeenCalled();
        expect(screen.getByText('¡Suscripcion Exitosa!')).toBeInTheDocument();     
    });
});