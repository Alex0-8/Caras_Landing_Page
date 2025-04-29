const Theme = {
    colors: {
        txtPrimary: '#000',
        txtSecondary: '#fff',
        txtTertiary: '#555',
        txtUserName: '#333',
        backgroundPrimary: '#ED1E1E',
        colorBorder: '#ddd',
        colorBtn: '#ef4138',
        backgroundFooter: '#fbfbfb',
    },

    fonts: {
        playfair: 'Playfair, Arial, Helvetica, sans-serif',
        barlowBold: 'Barlow-bold, Arial, Helvetica, sans-serif',
        barlowLight: 'Barlow-light, Arial, Helvetica, sans-serif',

        size: {
            responsive1: 'clamp(1.063rem, 1.009rem + 0.268vw, 1.25rem)',
            responsive2: 'clamp(1.688rem, 1.527rem + 0.804vw, 2.25rem)',
            responsive3: 'clamp(0.938rem, 0.884rem + 0.268vw, 1.125rem)',
        }
    },

    spacing: {
        small: '7px',
        medium: '20px',
        large: '32px',
    },
    
    mobileBreakpoint: '450px'
}

export default Theme;