import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${({theme, darkmode}) => darkmode ? theme.colors.veryDarkBlue : theme.colors.lightGray};
    }

    a, button {
        font-family: 'Nunito Sans', sans-serif;
    }
`;
