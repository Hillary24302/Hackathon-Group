import styled from 'styled-components';


export const Location = styled.div`
    color: #232323;
    padding: 60px 0;
    background: #fff;
`;
export const LocationWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
export const Wrapper = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;  
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: block;
        justify-content: center;

    }
`;
export const TextWrapper = styled.div`
    max-width: 612px;
    padding-top: 0px;
    padding-bottom: 5px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px
    }
`;
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size:48px;
    line-height: 1.1;
    object-fit: cover;
    color: #232323;
    text-align: center;

`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 24px;
    font-size:18px;
    line-height: 24px;
    color: #232323;
    margin-left: 170px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;

`
export const ImgWrapper = styled.div`
    max-width: 539px;
    display: flex;
    justify-content: right;
`
export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 444px;
`
export const TimeIcon =styled.div`
    display: flex;
    color: #0177F9;
    margin-left: 170px;
    margin-bottom: 10px;
`
export const Time =styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    color: #232323;
    margin-left: 4px;
`
export const CalenderIcon =styled.div`
    display: flex;
    color: #0177F9;
    margin-left: 170px;
    
`
export const Calender =styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    color: #232323;
    margin-left: 4px;
`