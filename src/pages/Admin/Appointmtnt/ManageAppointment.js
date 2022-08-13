import React from 'react'
import { AdminSidebar, AppointmentWrapper, SidebarUl, SidebarLi, SidebarLinks,
  AdminMainContent, BottonGroup, AdminButtonLinks, Content, ContentTitle, ContentTable,
ContentTh, ContentThead, ContentBody,ContentTr,ContentTd, Edit, Delete, Publish  } from '../Admin.elements'

function ManageAppointment() {
    return (
        <>
            <AppointmentWrapper>
                <AdminSidebar>
                    <SidebarUl>
                        <SidebarLi>
                        <SidebarLinks to ="/manage-appointment">Manage Appointments</SidebarLinks>
                        </SidebarLi>
                        <SidebarLi>
                        <SidebarLinks to ="/manage-users">Manage Users</SidebarLinks>
                        </SidebarLi>
                    </SidebarUl>
                </AdminSidebar>
                <AdminMainContent>
                   <BottonGroup>
                    <AdminButtonLinks to ="/create-appointment">Add Appointment</AdminButtonLinks>
                    <AdminButtonLinks to ="/manage-appointment">Manage Appointment</AdminButtonLinks>
                   </BottonGroup>

                   <Content>
                       <ContentTitle>Manage Appointment</ContentTitle>

                       <ContentTable>
                            <ContentThead>
                                <ContentTh>SN</ContentTh>
                                <ContentTh>List of Appointments</ContentTh>
                                <ContentTh>Author</ContentTh>
                                <ContentTh colspan='3'>Action</ContentTh>
                            </ContentThead>
                            <ContentBody>
                                <ContentTr>
                                    <ContentTd>1</ContentTd>
                                    <ContentTd>8th may 2022</ContentTd>
                                    <ContentTd>Chidimma Engr</ContentTd>
                                    <ContentTd><Edit to ="/manage-app">edit</Edit></ContentTd>
                                    <ContentTd><Delete to ="/manage-app">delete</Delete></ContentTd>
                                    <ContentTd><Publish to ="/manage-app">publish</Publish></ContentTd> 
                                </ContentTr>
                                <ContentTr>
                                    <ContentTd>2</ContentTd>
                                    <ContentTd>8th may 2022</ContentTd>
                                    <ContentTd>Henry</ContentTd>
                                    <ContentTd><Edit to ="/manage-app">edit</Edit></ContentTd>
                                    <ContentTd><Delete to ="/manage-app">delete</Delete></ContentTd>
                                    <ContentTd><Publish to ="/manage-app">publish</Publish></ContentTd>
                                    
                                    
                                    
                                </ContentTr>
                            </ContentBody>
                       </ContentTable>
                   </Content>
                </AdminMainContent>
            </AppointmentWrapper>
       </>
    )
}
export default ManageAppointment


 