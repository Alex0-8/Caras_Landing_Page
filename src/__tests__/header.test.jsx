import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";

const componentRender = (ui) => {
    return render(
        <ThemeProvider theme={Theme}>
            {ui}
        </ThemeProvider>
    );
}

describe('Header component tests', () => {
    it('should render the logo', () => {
        componentRender(<Header />)

        const logoImg = screen.getByAltText("Logotipo principal de CARAS");
        expect(logoImg).toBeInTheDocument();
        expect(logoImg.tagName).toBe("IMG");
    });

    it('should render the title', () => {
        componentRender(<Header />)

        expect(screen.getByText("¡Suscríbete al Newsletter de CARAS!")).toBeInTheDocument();
    });

    it('should render the subtitle', () => {
        componentRender(<Header />)

        expect(screen.getByText(/Recibe las últimas noticias,/i)).toBeInTheDocument()
    });
});