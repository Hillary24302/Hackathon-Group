import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


export const Top = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0px;
    z-index: 999;
    background: #fff;
    box-shadow: 6px 6px 12px rgba(1, 1, 24, 0.05), -6px -6px 12px rgba(255, 255, 255, 0.25);
`;
export const TopbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;
export const TopbarLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const TopbarLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 83px;
    height: 22px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: rgba(1, 1, 24, 0.9);
    margin-left: 4px;
`;
export const TopbarCenter = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : "-100%")};
        opacity: 1; 
        transition: all 0.5s ease;
        background: rgba(255, 255, 255, 0.85);
    }
   
`;
export const CenterSpan = styled.li`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(1, 1, 24, 0.9);
    padding-right: 12px;

    &:hover {
       
        @media screen and (max-width: 960px) {
            width: 100%;

            &:hover {
                border: none;
            }
        }
    }

`;
export const CenterLinks = styled(Link)`
    color: rgba(1, 1, 24, 0.9);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 0.5rem 0rem 0rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #00ff00;
            transition: all 0.3s ease;
        }
    }
`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
export const TopItemBtm = styled.li`
     @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;
export const TopBtmLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`
