import styled from "styled-components";

export const Wrapper = styled.main`
    padding: 25px 50px;
    background-color: ${({theme, darkmode}) => darkmode ? theme.colors.veryDarkBlue : theme.colors.lightGray};
    transition: background-color .3s;

    @media(max-width: 850px) {
        padding: 20px 40px;
    }
    @media(max-width: 650px) {
        padding: 20px 30px;
    }

    @media(max-width: 450px) {
        padding: 15px 25px;
    }

    & h2 {
        color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
        transition: color .3s;
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

export const Preload = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    i {
        font-size: 50px;
        color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
        animation: rotation 1.5s linear infinite;
        transition: color .3s;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Button = styled.button`
    display: block;
    margin: 30px 0 0 auto;
    background-color: transparent;
    border-style: none;
    padding: 0;
    color: rgba(0, 0, 0, 0.5);
    transition: color .3s ;
    cursor: pointer;

    &:hover {
        color: black;
    }

    i {
        font-size: 50px;
    }
`;