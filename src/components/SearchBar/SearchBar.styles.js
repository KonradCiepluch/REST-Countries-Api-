import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme, darkmode}) => darkmode ? theme.colors.veryDarkBlue : theme.colors.lightGray};
    padding: 40px 50px 15px 50px;
    transition: background-color .3s;

    @media(max-width: 850px) {
        flex-wrap: wrap;
        padding: 40px 35px 15px 35px;
    }
`;

export const Form = styled.form`
    flex-basis: 30%;
    background-color: ${({theme, darkmode}) => darkmode ? theme.colors.darkBlue : theme.colors.white};
    border-radius: 5px;
    transition: background-color .3s;

    @media(max-width: 850px){
        flex-basis: 100%;
        height: 50px;
        margin-bottom: 35px;
    }

    & button {
        background-color: transparent;
        color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
        border-style: none;
        height: 100%;
        width: 20%;
        cursor: pointer;
        transition: color .3s;

        @media(max-width: 850px) {
            width: 15%;
        }
    }

    & input {
        height: 100%;
        width: 80%;
        background-color: transparent;
        border-style: none;
        color: ${({theme, darkmode}) => darkmode  ? theme.colors.white : theme.colors.lightModeBlue};
        transition: color .3s;

        @media(max-width: 850px) {
            width: 85%;
        }
    }
`;

export const Options = styled.div`
    position: relative;

`;

export const Button = styled.button`
        background-color: ${({theme, darkmode}) => darkmode ?  theme.colors.darkBlue : theme.colors.white};
        border-radius: 5px;
        border-style: none;
        padding: 15px 20px;
        color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
        cursor: pointer;
        transition: background-color .3s, color .3s;

        & i{
            padding-left: 20px;
            font-size: 10px;
        }
`;

export const Container = styled.div`
    position: absolute;
    top: calc(100% + 5px);
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme, darkmode}) => darkmode ? theme.colors.darkBlue : theme.colors.white};
    color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
    border-radius: 5px;
    padding: 15px;
    transition: background-color .3s, color .3s;

    & button {
        position: relative;
        color: inherit;
        background-color: transparent;
        border-style: none;
        text-align: left;
        cursor: pointer;

        &::after {
            position: absolute;
            z-index: 1;
            content: '';
            right: 20%;
            top: 0;
            height: 100%;
            width: 2px;
            background-color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
            opacity: 0;
            transition: opacity .2s, background-color .3s; 
        }

        &:hover::after {
            opacity: 1;
        }
    }
    & button:not(:last-child) {
        margin-bottom: 5px;
    }
`;