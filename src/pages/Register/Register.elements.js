import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const RegisterWrapper = styled.div`

 display: flex;
 flex-direction: column;
  justify-content: center;
 align-items: center;
 background: #fff;
  background-size: cover; 
  padding-bottom: 60px;
`;
export const RegisterTitle = styled.h1`
 font-size: 32px;
 margin-top: 20px;
 color: #4b59f7;
 @media screen and (max-width: 660px) {
        font-size: 24px;
        
    }
`;
export const RegisterForm = styled.div`
 display: flex;
 flex-direction: column;
  justify-content: center;
 align-items: center;
`;
export const FormInputWrapper = styled.div`
     margin-top: 20px;
   display: flex;
  flex-direction: column;
`;
export const Label = styled.p`
    margin: 10px 0;
    color: #232323;
    font-size: 12px;
`;
export const FormInput = styled.input`
     padding: 15px;
     background-color: white;
     font-size: 14px;
     width: 400px;
     border: 2px solid #d3d3d3;
     border-radius: 5px;
     text-decoration: none;
     @media screen and (max-width: 400px) {
      width: 300px;   
    }
`;
export const TopItemBtm = styled.li`
     @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        
        
    }
`;
export const TopBtmLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 400px;
    background: #4b59f7;
    border-radius: 10px;
    outline: none;
    @media screen and (max-width: 400px) {
      width: 300px;   
    }
`
export const Registercheck = styled.input`
 position: absolute;
 top: 50rem;
    left: 50%;
     margin-left: -200px;
     bottom: 75px;
     color: #006d5b;
     border: 1px solid #006d5b;
     @media screen and (max-width: 660px) {
      top: 49.333rem;
        
        
    }
`
export const Label1 = styled.p`
    margin: 10px 0;
    margin-left: -10rem;
    color: #232323;
    font-size: 12px;
`;



// .register {
//     height: calc(100vh - 50px);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-image: linear-gradient( rgb(250,250,250,0.5),rgb(250,250,250,0.5)), url(../../Images/computer.jpg); 
//     background-size: cover;                                       
// }
// .registerTitle {
//     font-size: 50px;
// }
// .registerForm {
//     margin-top: 20px;
//     display: flex;
//     flex-direction: column;
// }
// .registerForm > label {
//     margin: 10px 0;
// }
// .registerInput {
//     padding: 15px;
//     background-color: white;
//     font-size: 14px;
//     width: 400px;
//     border: none;
//     border-radius: 5px;
// }
// .registerButton {
//     margin-top: 20px;
//     cursor: pointer;
//     background-color: #006d5b;
//     border: none;
//     color: white;
//     border-radius: 10px;
//     padding: 10px;
// }
// .registerLoginButton {
//     position: absolute;
//     top: 60px;
//     right: 20px;
//     background-color: #f77f00;
//     cursor: pointer;
//     border: none;
//     padding: 10px;
//     color: white;
//     border-radius: 10px;
// }
// .registercheck {
//     position: absolute;
//     left: 50%;
//     margin-left: -200px;
//     bottom: 75px;
//     color: #006d5b;
//     border: 1px solid #006d5b;
// }
// .registerlabel {
//     padding-left: 25px;
// }