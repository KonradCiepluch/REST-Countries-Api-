import styled from "styled-components";

export const StyledHeader  = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    background-color: ${({theme, darkmode}) => darkmode ?  theme.colors.darkBlue : theme.colors.white};
    transition: background-color .3s;

    @media(max-width: 450px) {
        padding: 20px 25px;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
    border-style: none;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    transition: color .3s;

    @media(max-width: 450px) {
        padding: 0;
    }
    
    i{
        padding-right: 10px;
        transform: rotate(-20deg);
    }
`;

export const Heading = styled.h1`
    color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};
    font-size: 20px;
    font-weight: 800;
    transition: color .3s;

    @media(max-width: 450px) {
        font-size: 18px;
    }
`;