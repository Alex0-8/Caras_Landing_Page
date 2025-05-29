import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import FooterSection from "../components/Footer";

const componentRender = (ui) => {
    return render(
        <ThemeProvider theme={Theme}>
            {ui}
        </ThemeProvider>
    );
}

describe('footer tests', () => {
    it('should show the testimonials txt', () => {
        componentRender(<FooterSection />)

        expect(screen.getByText('Facebook')).toBeInTheDocument()
        expect(screen.getByText('Twitter')).toBeInTheDocument()
        expect(screen.getByText(/EDITORIAL TELEVISA/i)).toBeInTheDocument()
    });
});