import React from 'react'
import { AdminSidebar, AppointmentWrapper, SidebarUl, SidebarLi, SidebarLinks,
  AdminMainContent, BottonGroup, AdminButtonLinks, Content, ContentTitle, ContentTable,
ContentTh, ContentThead, ContentBody,ContentTr,ContentTd, Edit, Delete, Publish  } from '../Admin.elements'

function ManageUsers() {
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
                    <AdminButtonLinks to ="/create-users">Add Users</AdminButtonLinks>
                    <AdminButtonLinks to ="/manage-users">Manage Users</AdminButtonLinks>
                   </BottonGroup>

                   <Content>
                       <ContentTitle>Manage Users</ContentTitle>

                       <ContentTable>
                            <ContentThead>
                                <ContentTh>SN</ContentTh>
                                <ContentTh>Username</ContentTh>
                                <ContentTh>Role</ContentTh>
                                <ContentTh colspan='3'>Action</ContentTh>
                            </ContentThead>
                            <ContentBody>
                                <ContentTr>
                                    <ContentTd>1</ContentTd>
                                    <ContentTd>Ejike</ContentTd>
                                    <ContentTd>Admin</ContentTd>
                                    <ContentTd><Edit to ="/manage-app">edit</Edit></ContentTd>
                                    <ContentTd><Delete to ="/manage-app">delete</Delete></ContentTd>
                                    <ContentTd><Publish to ="/manage-app">publish</Publish></ContentTd> 
                                </ContentTr>
                                <ContentTr>
                                    <ContentTd>2</ContentTd>
                                    <ContentTd>Hillarry</ContentTd>
                                    <ContentTd>Author</ContentTd>
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
export default ManageUsers


 