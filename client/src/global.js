import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    box-sizing: border-box
}

body {
    ${({ theme }) => `
        font-family: 'Roboto', sans-serif;
        margin: 0;
        color: ${theme.palette.text.primary}
        `}
    }
`;
