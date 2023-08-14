// import React ,{useState, useRef} from 'react'
// import styled from "styled-components"
// import jobs from '../assets/jobs.png'
// import Modal from './Modal'
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const data = [
//   {
//     title: "Senior UI/UX",
//     date: "7 Jun 2023",
//     type: "Part-time",
//     level: "Senior",
//     description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
//   },
//   {
//     title: "Back-end developer",
//     date: "1 Jun 2023",
//     type: "Full-time",
//     level: "Senior",
//     description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
//   },
//   {
//     title: "Front-end developer",
//     date: "25 May 2023",
//     type: "Full-time",
//     level: "Junior",
//     description: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
//   },
//   {
//     title: "CTO",
//     date: "15 March 2023",
//     type: "Full-time",
//     level: "Senior",
//     description: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
//   },
//   {
//     title: "Graphic designer",
//     date: "11 March 2023",
//     type: "Freelance",
//     level: "Senior/ Junor",
//     description: "Maecenas tempus, tellu. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
//   }
// ]
// const Title= styled.h1`
//     font-size: ${props => props.theme.fontxl};
//     text-transform: capitalize;
//     padding: 1rem;
//     margin: 0;
//     color: white;
// `
// const Image = styled.img`
//     width: 50%;
//     right: 0;
//     position: relative;
// `
// const Section = styled.div`
//   background: #020E18;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `
// const Columns = styled.div`
//   display: grid;
//   grid-auto-flow: row;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   margin: 2rem 0;
//   gap: 2rem;
//   width: 80%;
  
// `
// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   border: 1px solid #F3F7FF;
//   background-color: #F3F7FF;
//   border-radius: 5px;
//   padding: 1rem;

//   label, input, textarea{
//     margin: 0.75rem;
//     height: 2rem;
//     align-items: center;
//     display: flex;
//   }

//   p{
//     margin: 0 0.75rem;
//   }
// `

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 0.5rem;
//   :last-child {
//       justify-content: center;
//     }
//   :first-child {
//     justify-content: space-between;
//     align-items: center;
//   }
// `

// const JobTitle = styled.h3`
//   font-size: ${props => props.theme.fontxl};
// `
// const JobType = styled.h4`
//   font-size: ${props => props.theme.fontml};
//   background-color: #E7D9F9;
//   color: #B385D3;
//   margin: 0;
//   padding: 0.5rem;
//   border-radius: 5px;
// `
// const JobLevel = styled.h4`
//   font-size: ${props => props.theme.fontml};
//   background-color: #DBF0EA;
//   color: #7cd3aa;
//   margin: 0;
//   padding: 0.5rem;
//   border-radius: 5px;
// `

// const Button= styled.button`
//   background-color: #466DD8;
//   color: white;
//   border-radius: 5px;
//   border: 1px solid #466DD8;
//   cursor: pointer;
//   padding: 0.5rem;
//   width: 50%;
// `
// const Date= styled.p`
//   color: grey;
// `
// const Des= styled.div`
//   min-height: 10rem;
// `
// const Text= styled.p`
//   color: white;
// `
// const SubContainer= styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 2rem;
// `

// const SuccessMessage = styled.p`
//     background-color: #E0FFC7;
//     border: 1px solid #BAD5A0;
//     border-radius: 5px;
//     color: #2C522D;
//     text-align: center;
//     margin: 0.5rem 0;
//     padding:0.5rem;
// `
// const Btn = styled.button`
//     display: inline-block;
//     background-color: #304F5D;
//     color: white;
//     outline: none;
//     border: none;  
//     margin: 1rem;
    
//     font-size: ${props => props.theme.fontsm};
//     padding: 0.9rem 2.3rem;
//     border-radius: 50px;
//     cursor: pointer;
//     transition: all 0.2 ease;
//     position: relative;

//     &:hover{
//         transform: scale(0.9);
//     }

//     &::after{
//         content: ' ';
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%) scale(0);
//         border: 2px solid ${props => props.theme.body};
//         height: 100%;
//         width: 100%;
//         border-radius: 50px;
//         transition: all 0.2s ease;
//     }

//     &:hover::after{
//         transform: translate(-50%, -50%) scale(1);
//         padding: 0.3rem;
//     }
// ` 
// const StyledForm = styled(Form)`
//     display: flex;
//     flex-direction: column;
//     width: 45%;

//     @media (max-width: 64em) {
//         width: 50%;
//     }
// `
// const Error= styled.p`
//     color: red;
// `

// const RowForm = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin: 0.5rem;
//   justify-content: space-between;
// `
// function JobModal ({onHandleModal}){
//   const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
//   const scriptUrl = "https://script.google.com/macros/s/AKfycbxjiQvIJMO-T4DvGN4yQbCdDOrO6mn7GjJKT9LbvnkSeYIZgkqLYd5VZKEwK469zbanTA/exec"

//   const fileInputRef = useRef(null)

//   const handleSubmit = ( values) =>{
//     setIsFormSubmitted(true);

//     const files = fileInputRef.current.files
//     if (files.length > 0){
//           const fileData = new FormData()
          
//           for (let i=0 ; i< files.length; i++){
//             fileData.append("files", files[i])
//           }

//           fetch('http://localhost:8000/upload',{
//             method: 'POST',
//             body: fileData
//           })
//           .then((res) => res.json())
//           .then((data) => {
//               console.log(data);
//           })
//           .catch((error) => {
//             console.log(error);
//         });
//     }

//     const formData = new FormData();

//     formData.append('Name', values.name)
//     formData.append('Email', values.email)
    

//     fetch(scriptUrl,
//     {
//         method: "POST",
//         body: formData
//     }
//     )
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//   }

//   return(
//     <Modal title="Apply For A Job" onHandleModal={onHandleModal}>
//       <Formik
//                 initialValues={{ name: '', email: '', message: '', file: null }}
//                 validationSchema={Yup.object({
//                   name: Yup.string()
//                       .required('* Required'),
//                   email: Yup.string()
//                       .email('Invalid email address')
//                       .required('* Required'),
//               })}
//                 onSubmit={values => handleSubmit(values)}
//                 >
//                 <StyledForm>
//                 <RowForm>
//                   <Column>
//                     <label htmlFor="name">Full Name</label>
//                     <label htmlFor="email">Email Address</label>
//                     <label htmlFor="message">Message</label>
//                     <label htmlFor="file">Upload CV</label>
//                   </Column>

//                   <Column>
//                     <Field id="name" placeholder="Lastname Firstname" name="name" type="text" />
//                     <Error><ErrorMessage name="name" /></Error> 
//                     <Field id="email" placeholder="Email Address" name="email" type="text" />
//                     <Error><ErrorMessage name="email" /></Error>
//                     <Field component={() => <textarea placeholder="Message" id="message" name="message" ></textarea>} />
//                     <input  id="file" name="file" type="file" multiple ref={fileInputRef} />
//                     <p>Please name your CV as the following format: LastName.Firstname.JobPosition</p>
//                   </Column>
//                 </RowForm>
//                     {isFormSubmitted ?
//                     <SuccessMessage>
//                         Thank you for filling out your information! We will in touch with u shortly!
//                     </SuccessMessage>
//                     :
//                     <Btn type="submit">Send application</Btn>
//                     }
                    
//                 </StyledForm>
//             </Formik>
//     </Modal>
//   )
// }

// function JobsGoogleDrive() {
//     const [isShowModal, setIsShowModal]= useState(false)
        
//     const handleShowModal = () =>{
//         setIsShowModal(!isShowModal)
//     }
//     return (
//         <>
//         <Container>
//         <Section>
//             <SubContainer>
//             <Title>Find Your Career. <br /> You deserve it. </Title>
//             <Text>Find out what you like doing best, and get someone to pay you for doing it.</Text>
//             </SubContainer>
//             <Image src={jobs} alt="jobs"/>
//         </Section>
//         <Columns>
//         {data.map((job, i) => 
//             <>
//             <Column>
//                 <Row key={i}>
//                 <JobTitle>{job.title}</JobTitle>
//                 <Date>{job.date}</Date>
//                 </Row>
//                 <Row>
//                 <JobType>{job.type}</JobType> 
//                 <JobLevel>{job.level}</JobLevel></Row>
//                 <Row><h3>Desciption</h3></Row>
//                 <Row><Des>{job.description}</Des></Row>
//                 <Row><Button onClick={handleShowModal}>Apply</Button></Row>
//             </Column>
//             </>
//         )}
//         </Columns>
//         </Container>
//         { isShowModal && <JobModal onHandleModal={handleShowModal} /> }
//         </>
//     )
// }

// export default JobsGoogleDrive