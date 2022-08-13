import React from 'react'
import { AdminSidebar, AppointmentWrapper, SidebarUl, SidebarLi, SidebarLinks,
  AdminMainContent, BottonGroup, AdminButtonLinks, Content, ContentTitle, ContentForm,
FormInput, InputWrapper, FormInputWrapper, FormSelect, Options,
AdminButtonLinkSubmit, FormLabel  } from '../Admin.elements'

function CreateUsers() {
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
                       <ContentTitle>Create Admin Users</ContentTitle>
                        <ContentForm action='' method='post'>
                            <InputWrapper>
                                    <FormInputWrapper>
                                        <FormInput name='user-name' type='text' placeholder='Enter your User Name' />
                                    </FormInputWrapper>
                                    <FormInputWrapper>
                                        <FormInput name='email' type='email' placeholder='Enter your Email' />
                                    </FormInputWrapper>
                                    <FormInputWrapper>
                                        <FormInput name='password' type='password' placeholder='Enter your Password' />
                                    </FormInputWrapper>
                                    <FormInputWrapper>
                                        <FormInput name='password-comf' type='password' placeholder='Enter your Password' />
                                    </FormInputWrapper>
                                    <FormInputWrapper>
                                        <FormLabel>Role</FormLabel>
                                        <FormSelect name ="role" >
                                            <Options value='author'>Author</Options>
                                            <Options value='admin'>Admin</Options>v
                                        </FormSelect>
                                    </FormInputWrapper>
                                    <BottonGroup>
                                        <AdminButtonLinkSubmit to ="/create-app">Add User</AdminButtonLinkSubmit>
                                    </BottonGroup>
                            </InputWrapper>
                        </ContentForm>
                       
                   </Content>
                </AdminMainContent>
            </AppointmentWrapper>
       </>
    )
}
export default CreateUsers


 