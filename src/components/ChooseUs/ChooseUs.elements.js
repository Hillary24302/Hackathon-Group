import styled from 'styled-components';


export const InfoSec = styled.div`
    color: #232323;
    padding: 60px 0;
    background: #fff;
`;
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row-reverse;

`;
export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;  
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
`;
export const TextWrapper = styled.div`
    max-width: 612px;
    padding-top: 0px;

    @media screen and (max-width: 768px) {
        padding-bottom: 10px
    }
`;
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size:48px;
    line-height: 1.1;
    object-fit: cover;
    color: #232323;

`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size:18px;
    line-height: 24px;
    color: #232323;

`
export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: flex-start;
`
export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`
export const ImgTextWrapper = styled.div`
    max-width: 612px;
    padding-top: 0px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px
    }
`;
export const ImageInfor = styled.div`
    display: flex;
    padding-bottom: 10px;
`;
export const Image = styled.img`
    object-fit: cover;
`;
export const Text = styled.p`
    font-family: 'rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #232323;
    padding-left: 20px;
    padding-top: 10px;
`;