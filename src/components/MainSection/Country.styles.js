import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
    display: block;
    background-color: ${({theme, darkmode}) => darkmode ==='true' ? theme.colors.darkBlue : theme.colors.white};
    border-radius: 5px;
    text-decoration: none;

    @media(max-width: 850px) {
        margin-bottom: 50px;
    }
        
    & img {
        border-radius: 5px 5px 0 0;
        width: 100%;

        @media(max-width: 850px) {
            max-height: 400px;
        }
    }
`;

export const Info = styled.div`
    padding: 15px;
    color: ${({theme, darkmode}) => darkmode ? theme.colors.white : theme.colors.lightModeBlue};

    @media(max-width: 850px) {
        padding: 25px;
    }

    & h2 {
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 10px;

        @media(max-width: 850px) {
            font-size: 20px;
        }
        @media(max-width: 400px) {
            font-size: 18px;
        }
    }
    & p {
        font-size: 12px;
        font-weight: 300;
        margin: 3px  0;

        @media(max-width: 850px) {
            font-size: 14px;
            margin: 5px 0;
        }

        @media(max-width: 400px) {
            font-size: 16px;
        }

        & span {
            font-weight: 600;
            font-size: 14px;

            @media(max-width: 850px) {
            font-size: 16px;
            }
            @media(max-width: 400px) {
            font-size: 15px;
            }

        }
    }
`;