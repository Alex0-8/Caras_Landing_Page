import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import Testimonials from "../components/Testimonials";

const componentRender = (ui) => {
    return render(
        <ThemeProvider theme={Theme}>
            {ui}
        </ThemeProvider>
    );
}

describe('testimonials tests', () => {
    it('should show the testimonials txt', () => {
        componentRender(<Testimonials />)

        expect(screen.getByText('Lo que dicen nuestros suscriptores')).toBeInTheDocument()
        expect(screen.getByText('María Fernández')).toBeInTheDocument()
        expect(screen.getByText(/Recibir el newsletter de CARAS/i)).toBeInTheDocument()
        expect(screen.getByText(/Me encanta comenzar mi día con/i)).toBeInTheDocument()
    });
});