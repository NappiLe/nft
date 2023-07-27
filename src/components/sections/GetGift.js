import React  from 'react'
import styled from 'styled-components'
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'

const Section = styled.section`
    padding: 2rem;
    width: 100vw;
    background-color: ${props => props.theme.text};
    position: relative;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 35%;
`
const Label= styled.label`
    font-size: ${props => props.theme.fontlg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.body};
    margin-top: 1rem;
`
const StyledField = styled.input`
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-bottom: 2px solid ${props => props.theme.body};
    outline: 0;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
`
// const Error= styled.p`
//     color: red;
//`
const Btn = styled.button`
    display: inline-block;
    background-color: #65E746;
    color: ${props => props.theme.body};
    outline: none;
    border: none;  
    margin: 1rem;
    
    font-size: ${props => props.theme.fontsm};
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2 ease;
    position: relative;

    &:hover{
        transform: scale(0.9);
    }

    &::after{
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${props => props.theme.body};
        height: 100%;
        width: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after{
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }

` 
function GetGift() {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")

    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const scriptUrl = "https://script.google.com/macros/s/AKfycbyhz6xFrr1TvE6MyJJ4ZV5vcPCfIdMAtT0OUdwVkSulYxomX1XthvKIrxqHThw5MOUH/exec"
    //const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formEle = document.querySelector("form");
        const formData = new FormData(formEle);

        // formData.append('Name', name)
        // formData.append('Email', email)
        // formData.append('Phone', phone)
        
        
        fetch(scriptUrl,
        {
            method: "POST",
            body: formData
        }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  
    return (
        <Section id="getgift">
            <Title>Simple submit this form to get gift now: </Title>
            {/* <Formik
                initialValues={{ Name: '', Email: '', Phone: '' }}
                validationSchema={Yup.object({
                    Name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('* Required'),
                    Email: Yup.string()
                        .email('Invalid email address')
                        .required('* Required'),
                    Phone: Yup.string()
                        .matches(phoneRegExp, 'Phone number is not valid')
                        .min(10, "Phone number is too short")
                        .max(10, "Phone number is too long")
                        .required('* Required'),
                })}
                > */}
                <StyledForm className="form" onSubmit={(e) => handleSubmit(e)}>
                    <Label htmlFor="name">Full Name</Label>
                    <StyledField placeholder="Full Name" name="Name" type="text" />
                    {/* <Error><ErrorMessage name="name" /></Error> */}

                    <Label htmlFor="email">Email Address</Label>
                    <StyledField placeholder="Email address" name="Email" type="text" />
                    {/* <Error><ErrorMessage name="email" /></Error> */}
            
                    
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    {/* <PhoneInput
                        international
                        defaultCountry="FI"
                        name="Phone" 
                        value={phone}
                        onChange={setPhone}/> */}
                    <StyledField placeholder="Phone Number" name="Phone" type="text" /> 
                    {/* <Error><ErrorMessage name="phoneNumber" /></Error> */}
                    
                    <Btn type="submit">RESERVE MY SPOT NOW</Btn>
                </StyledForm>
            {/* </Formik> */}
        </Section>
    )
}

export default GetGift