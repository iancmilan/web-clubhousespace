import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.primary};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }

    button {
        cursor: pointer;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
`;