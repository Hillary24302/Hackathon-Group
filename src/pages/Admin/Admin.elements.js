import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AppointmentWrapper = styled.div`
    display: flex;
    height: calc(100%-80px);


`;
export const AdminSidebar = styled.div`
    flex: 2;
    height: calc(100%-80px);
   background: teal;


`;
export const SidebarUl = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
    color: aliceblue;
`;
export const SidebarLi = styled.li`
    flex: 8;
    height: 100%;
`;
export const SidebarLinks = styled(Link)`
    padding: 18px;
    display: block;
    border-bottom: 1px solid  #d3d3d3;
    color: aliceblue;
    text-decoration: none;
    &:hover {
       background: #5f9ea0;
   }
`;
export const AdminMainContent = styled.div`
    flex: 8;
    height: 100%;
    padding: 40px 100px 100px;
    overflow-y: scroll;
`;
export const ContentTitle = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
`;
export const ContentTitleSm = styled.h3`
    text-align: center;
    margin-bottom: .5rem;
    margin-top: .5rem;
    font-size: 12px;
    color: teal;
`;
export const ContentTable = styled.div`
    width: 100%;
    border-collapse: collapse;
    font-size: 1.1rem;
`;
export const ContentThead = styled.thead`
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #d3d3d3;
`;
export const ContentTh = styled.th`
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #d3d3d3;
`;
export const Edit = styled.a`
   color: green;
   &:hover {
       text-decoration: underline
   }
`;
export const Delete = styled.a`
    color: red;
    &:hover {
       text-decoration: underline
   }
`;
export const Publish = styled.a`
   color: blue;
   &:hover {
       text-decoration: underline
   }
`;
export const ContentBody = styled.tbody`
  
`;
export const ContentTr = styled.tr`
   padding: 15px;
    text-align: left;
    border-bottom: 1px solid #d3d3d3;
`;
export const ContentTd = styled.td`
   padding: 15px;
    text-align: left;
    border-bottom: 1px solid #d3d3d3;
`;
export const BottonGroup = styled.div`
  
`;
export const AdminButtonLinks = styled(Link)`
  padding: 15px;
  color: #fff;
  background: teal;
  border: none;
  margin: 5px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const AdminButtonLinkSubmit = styled(Link)`
    position: absolute;
  padding: 15px;
  color: #fff;
  background: teal;
  border: none;
  margin: 5px;
  text-decoration: none;
  border-radius: 5px;
  top: 30rem;
  cursor: pointer;
`;
export const Content = styled.div`

`;
export const ContentForm = styled.form`
    display: flex;
    
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
export const InputWrapper = styled.div`
    padding: 10px;
`
export const TextAreaWrapper = styled.div`
     padding: 10px;
`
export const Textarea = styled.textarea`
     padding: 60px;
     margin-top: 20px;
     background-color: white;
     font-size: 14px;
     width: 400px;
     border: 2px solid #c4c4c4;
     border-radius: 5px;
     text-decoration: none;
     @media screen and (max-width: 400px) {
      width: 300px;   
    }
`;
export const FormSelect = styled.select`
     padding: 10px;
`
export const Options = styled.option`
     padding: 10px;
`
export const FormLabel = styled.label`
     padding: 10px;
`