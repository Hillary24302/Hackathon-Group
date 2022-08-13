import styled, {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Rubik';
    }
`
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;


    @media screen and (max-width: 991px) {
        padding-left: 32px;
        padding-right: 32px;
    }
`

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? "teal" : "0467fb") };
    white-space: nowrap;
    padding: ${({big}) => (big ? "12px 64px" : "10px 20px") };
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? "#5f9ea0" : "4b59f7") };
    

        width: 100%;
    }
`



export default GlobalStyle