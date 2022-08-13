import React from 'react'
import { AdminSidebar, AppointmentWrapper, SidebarUl, SidebarLi, SidebarLinks,
  AdminMainContent, BottonGroup, AdminButtonLinks, Content, ContentTitle, ContentForm,
FormInput, InputWrapper, FormInputWrapper, TextAreaWrapper, Textarea, ContentTitleSm,
AdminButtonLinkSubmit  } from '../Admin.elements'

function CreateAppointment() {
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
                       <ContentTitle>Manage Users</ContentTitle>
                       <ContentTitleSm>Please fill in the form an make an appointment with any of our doctors.</ContentTitleSm>
                        <ContentForm action='' method='post'>
                            <InputWrapper>
                                    <FormInputWrapper>
                                        <FormInput name='full_name' type='text' placeholder='Enter your Full Name' />
                                    </FormInputWrapper>
                                    <FormInputWrapper>
                                        <FormInput name='email' type='email' placeholder='Enter your Email' />
                                    </FormInputWrapper>
                                    <FormInputWrapper>
                                        <FormInput name='phone-number' type='number' placeholder='Enter your Phone number' />
                                    </FormInputWrapper>
                            </InputWrapper>
                            <TextAreaWrapper>
                                <Textarea id="message" name="message" rows="4" cols="50" placeholder='Message' />
                                <BottonGroup>
                                    <AdminButtonLinkSubmit to ="/create-app">Send mail</AdminButtonLinkSubmit>
                                </BottonGroup>
                            </TextAreaWrapper>
                        </ContentForm>
                       
                   </Content>
                </AdminMainContent>
            </AppointmentWrapper>
       </>
    )
}
export default CreateAppointment


 