import React, {useState, useEffect} from 'react'
import { Button } from '../../globalStyles';
import { RegisterWrapper, RegisterTitle, RegisterForm, FormInputWrapper, Label, FormInput, 
    TopItemBtm, TopBtmLink, Registercheck, Label1  } from './Register.elements'

function Register() {
    const [button, setButton] = useState(true)
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
  
    useEffect(() => {
        showButton()
    }, [])
  
    window.addEventListener('resize', showButton);
    return (
        <>
            <RegisterWrapper>
                <RegisterTitle>
                First, let’s set up your account 
                </RegisterTitle>
                <RegisterForm>
                    <FormInputWrapper>
                        <Label>FULL NAME</Label>
                        <FormInput name='full_name' type='text' placeholder='Enter your Full Name' />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label>PHONE NUMBER</Label>
                        <FormInput name='phone_number' type='number' placeholder='Enter Your Phone Number' />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label>EMAIL ADDRESS</Label>
                        <FormInput name='email' type='email' placeholder='Enter Your Email' />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label>DATE OF BAITH</Label>
                        <FormInput name='email' type='email' placeholder='Your Email' />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label>PASSWORD</Label>
                        <FormInput name='password' type='password' placeholder='Your Email' />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label>PASSWORD CONFIRMATION</Label>
                        <FormInput name='password' type='password' placeholder='Your Email' />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label1>I agree with rules</Label1>
                        <Registercheck type='checkbox'/>
                    </FormInputWrapper>
                </RegisterForm>
                <TopItemBtm>
                        {button ? (
                            <TopBtmLink to="/submit">
                            <Button primary>Submit</Button>
                            </TopBtmLink>
                        ) : (
                            <TopBtmLink to="/submit">
                                <Button  fontBig primary>
                                    Submit
                                </Button>
                            </TopBtmLink>
                        )}
                    </TopItemBtm>
            </RegisterWrapper>
       </>
    )
}
export default Register


    //     <div className ="register">
    //         <span className ="registerTitle">Register</span>
    //         <form className ="registerForm">
    //             <label>Username</label>
    //             <input type ="text" className ="registerInput" placeholder ="Enter your username..."/>
    //             <label>Email</label>
    //             <input type ="text" className ="registerInput" placeholder ="Enter your email..."/>
    //             <label>Password</label>
    //             <input type ="password" className ="registerInput" placeholder ="Enter your password..."/>
    //             <label>Phone number</label>
    //             <input type ="number" className ="registerInput" placeholder ="Enter your phone number..."/>
    //             <input type="checkbox" className="registercheck"/>
    //             <label className="registerlabel">I agree with rules</label>
    //             <button className ="registerButton">Register</button>
    //         </form>
    //         <button className ="registerLoginButton"><Link className="Link" to ="/Login">Login</Link></button>
    //     </div>
    // )