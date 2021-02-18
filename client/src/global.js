import { createGlobalStyle } from 'styled-components';

const sm = 600;
const md = 960;
const primary = '#E63850';
const secondary = '#616161';

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
