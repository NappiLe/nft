import React  from 'react'
import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
    width: fit-content;

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxl};
    }

    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontlg};
    }

    @media (max-width: 30em) {
        font-size: ${props => props.theme.fontmd};
    }
`
const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 35%;

    @media (max-width: 64em) {
        width: 50%;
    }
`
const Label= styled.label`
    font-size: ${props => props.theme.fontlg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.body};
    margin-top: 1rem;
`
const StyledField = styled(Field)`
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-bottom: 2px solid ${props => props.theme.body};
    outline: 0;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
`
const Error= styled.p`
    color: red;
`

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

const SuccessMessage = styled.p`
    background-color: #E0FFC7;
    border: 1px solid #BAD5A0;
    border-radius: 5px;
    color: #2C522D;
    text-align: center;
    margin: 0.5rem 0;
    padding:0.5rem;
`
function GetGift() {
    const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const scriptUrl = "https://script.google.com/macros/s/AKfycbyhz6xFrr1TvE6MyJJ4ZV5vcPCfIdMAtT0OUdwVkSulYxomX1XthvKIrxqHThw5MOUH/exec"
    //const [loading, setLoading] = useState(false)

    const handleSubmit = ( values) =>{
        setIsFormSubmitted(true);

        const formData = new FormData();

        formData.append('Name', values.name)
        formData.append('Email', values.email)
        formData.append('Phone', values.phone)
        
        
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
            <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('* Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('* Required'),
                    phone: Yup.string()
                        .matches(phoneRegExp, 'Phone number is not valid')
                        .min(10, "Phone number is too short")
                        .max(10, "Phone number is too long")
                        .required('* Required'),
                })}

                onSubmit={values => handleSubmit(values)}
                >
                <StyledForm>
                    <Label htmlFor="name">Full Name</Label>
                    <StyledField id="name" placeholder="Full Name" name="name" type="text" />
                    <Error><ErrorMessage name="name" /></Error>

                    <Label htmlFor="email">Email Address</Label>
                    <StyledField id="email" placeholder="Email Address" name="email" type="text" />
                    <Error><ErrorMessage name="email" /></Error>
            
                    
                    <Label htmlFor="phone">Phone Number</Label>
                    {/* <PhoneInput
                        international
                        defaultCountry="FI"
                        name="Phone" 
                        value={phone}
                        onChange={setPhone}/> */}
                    <StyledField id="phone" placeholder="Phone Number" name="phone" type="text" /> 
                    <Error><ErrorMessage name="phone" /></Error>
                    
                    {isFormSubmitted ?
                    <SuccessMessage>
                        Thank you for filling out your information! We will in touch with u shortly!
                    </SuccessMessage>
                    :
                    <Btn type="submit">RESERVE MY SPOT NOW</Btn>
                    }
                    
                </StyledForm>
            </Formik>
        </Section>
    )
}

export default GetGift