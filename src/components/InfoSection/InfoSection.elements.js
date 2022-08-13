import styled from 'styled-components';


export const InfoSec = styled.div`
    color: #fff;
    padding: 60px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')}
`;
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')
};
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
        display: block;
        justify-content: center;

    }
`;
export const TextWrapper = styled.div`
    max-width: 612px;
    padding-top: 0px;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px
    }
`;
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size:48px;
    line-height: 1.1;
    object-fit: cover;
    color: ${({lightText}) => (lightText ? '#232323' : '#fff')};

`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size:18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#232323' : '#fff')};

`
export const ImgWrapper = styled.div`
    max-width: 539px;
    display: flex;
    justify-content: ${({ start }) =>(start ? 'flex-start' : 'flex-end')};
`
export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 444px;
`
export const InfoStat = styled.div`
    display: grid;
    place-items: center;
    grid-gap: 15px;
    grid-template-columns: auto auto auto;
    text-align: justify;
    bottom: 2660px;
    max-width: 539px;
    max-height: 116px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(55, 55, 55, 0.25);
    border-radius: 10px;
`
export const Statistics = styled.div`
    display: block;
    max-width: 142px;
    max-height: 62px;

  

`
export const StatBig = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-align: center;
    color: #0177F9;
   


`
export const StatSmall = styled.p`
    left: 728px;
    top: 680px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    text-align: center;
    color: #A1A1A1;
    

`
