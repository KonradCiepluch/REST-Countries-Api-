import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 50px 50px 0;
    min-height: 300px;
    padding-top: 100px;

    @media(max-width: 850px) {
        display: block;
        min-height: 80vh;
        margin: 50px 70px 0;
    }

    @media(max-width: 650px) {
        margin: 50px 50px 0;
    }
    
    @media(max-width: 450px) {
        margin: 50px 30px 0;
    }
`;

export const Back = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({theme, darkmode}) => darkmode === 'true' ?  theme.colors.darkBlue : theme.colors.white};
    color: ${({theme, darkmode}) => darkmode === 'true' ? theme.colors.white : theme.colors.lightModeBlue};
    text-decoration: none;
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: 0 0 2px black;
    transition: background-color .3s, color .3s;

    i{
        margin-right: 10px;
    }
`;

export const FlagWrapper = styled.div`
    align-self: center;
    flex-basis: 45%;
    background-color: ${({theme, darkmode}) => darkmode ? theme.colors.darkBlue : theme.colors.white};
    padding: 10px;
    border-radius: 5px;
    transition: background-color .3s;

    @media(max-width: 1050px) {
        flex-basis: 50%;
    }
    

    & img {
        width: 100%;
        min-height: 100%;
        display: block;
    }
`;

export const Details = styled.div`
    flex-basis: 45%;
    margin-top: 25px;
    color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
    transition: color .3s;

    @media(max-width: 950px) {
        flex-basis: 40%;
        font-size: 12px;
    }

    & h3 {
        font-size: 20px;
        margin-bottom: 20px;

        @media(max-width: 850px) {
            font-size: 22px;
        }
    }
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 50%;

    & p {
        flex-basis: 20%;
        font-size: 13px;

        @media(max-width: 950px) {
        font-size: 12px;
        }

        @media(max-width: 850px) {
            font-size: 15px;
            margin-bottom: 5px;
        }


        & span {
            font-weight: 600;
        }
    }
`;

export const Borders = styled.div`
    margin-top: 10px;
    font-weight: 600;
    font-size: 13px;
    display: flex;
    flex-wrap: wrap;

    & h4 {
        font-weight: 600;
        padding: 5px 0;

        @media(max-width: 850px) {
            width: 100%;
        }
    }
    & p {
        margin-left: 5px;
        padding: 5px 0;
    }
`;

export const StyledLink = styled(Link)`
        margin: 0 5px 5px;
        text-decoration: none;
        color: ${({theme, darkmode}) => darkmode === 'true' ? theme.colors.white : theme.colors.lightModeBlue};
        padding: 5px 10px;
        background-color: ${({theme, darkmode}) => darkmode === 'true' ? theme.colors.darkBlue : theme.colors.white};
        border-radius: 5px;
        font-weight: 300;
        box-shadow: 0 0 2px black;
        transition: background-color .3s, color .3s;

        @media(max-width: 850px) {
            margin: 0 5px 5px 0;
        }
`;