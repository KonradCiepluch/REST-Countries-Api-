import styled from "styled-components";

export const Wrapper = styled.main`
    padding: 25px 50px;
    background-color: ${({theme, darkmode}) => darkmode ? theme.colors.veryDarkBlue : theme.colors.lightGray};

    @media(max-width: 850px) {
        padding: 20px 40px;
    }
    @media(max-width: 650px) {
        padding: 20px 30px;
    }

    @media(max-width: 450px) {
        padding: 15px 25px;
    }
`;

export const Countries = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 20%);
    justify-content: space-between;
    row-gap: 50px;

    @media(max-width: 850px) {
        display: block;
        width: 80%;
        margin: 50px auto;
    }
    @media(max-width: 650px) {
        width: 90%;
    }

    @media(max-width: 450px) {
        width: 95%;
    }
`;