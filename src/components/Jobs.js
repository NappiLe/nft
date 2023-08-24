import React ,{useState } from 'react'
import styled from "styled-components"
import jobs from '../assets/jobs.png'
import Modal from './Modal'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const data = [
  {
    title: "Python developer",
    date: "22 Aug 2023",
    type: "Full time",
    level: "Senior",
    description:
      <ul>
        <li> Work closely with our clients to develop product and configure the application to their business environment.</li>
        <li>Work within a team & communicate effectively across teams.</li>
        <li>Deal with technical challenges, programing tasks while managing client expectations and building long-term customer relations.</li>
        <li>Implement assigned tasks from client/manager.</li>
    </ul>,
    skills:
      <ul>
        <li>From 2 years of experience in Python.</li>
        <li>Experience working with Django framework.</li>
        <li>Experience working with Jinja2.</li>
        <li>Experience with Python ORM: SQLAlchemy.</li>
        <li>Experience working with Git, Git flow.</li>
        <li>Have knowledge with DB, DB design.</li>
    </ul>,
    additional:
      <ul>
        <li>Experience with other Python Web Framework: FastAPI, Flask, Pyramid.</li>
        <li>Experience working with micro-service projects.</li>
        <li>Experience with NoSQL (MongoDB/DynamoDB).</li>
        <li>Experience with Docker.</li>
        <li>Experience with cloud services: AWS/Azure/GCP.</li>
    </ul>,
    benefits:
    <ul>
      <li>Surrounded with friendly, open-minded, young and supportive colleagues Annual company trip and regular team-building parties, party celebration (Christmas, Birthday, Mid-autumn...), sports clubs (Football, Badminton, Swimming...).</li>
      <li>Bonus programs for candidate referral, technical article writing.</li>
      <li>Attractive salary (13th-month salary, salary review twice/year) and project bonus.</li>
    </ul>,
  },
  {
    title: "Algo-Trading Strategy Researcher",
    date: "24 Aug 2023",
    type: "Full time",
    level: "Senior",
    description: 
      <div>
        <p>We are seeking a highly motivated Algo-Trading Strategy Researcher (ATSR) to join our team."</p>
      <ul>
        <li>The ATSR will be responsible for conducting research and analysis to develop new trading strategies, as well as optimizing and enhancing existing strategies.</li>
        <li>The ATSR will work closely with our trading and technology teams to implement and monitor these strategies in real- time.</li>
      </ul>
      </div>
      ,
    skills:
      <ul>
        <li>Bachelor's or Master's degree in Mathematics, Statistics, Computer Science, Finance, or a related field.</li>
        <li>3+ years of experience in quantitative research or algorithmic trading (Must have).</li>
        <li>Strong knowledge of statistics and machine learning techniques.</li>
        <li>Proficiency in at least one programming language such as Python, C++, or Java.</li>
        <li>Experience with financial data analysis and modeling</li>
        <li>Strong problem-solving and analytical skills</li>
        <li>Excellent communication and collaboration skills</li>
      </ul>,
    additional: "-",
    benefits:
    <ul>
      <li>Surrounded with friendly, open-minded, young and supportive colleagues Annual company trip and regular team-building parties, party celebration (Christmas, Birthday, Mid-autumn...), sports clubs (Football, Badminton, Swimming...).</li>
      <li>Bonus programs for candidate referral, technical article writing.</li>
      <li>Attractive salary (13th-month salary, salary review twice/year) and project bonus.</li>
    </ul>,
  }
]
const Title= styled.h1`
    font-size: ${props => props.theme.fontxl};
    text-transform: capitalize;
    padding: 1rem;
    margin: 0;
    color: white;
`
const Image = styled.img`
    width: 50%;
    right: 0;
    position: relative;
`
const Section = styled.div`
  background: #020E18;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Columns = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 2rem 0;
  gap: 2rem;
  width: 95%;
  
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid #F3F7FF;
  background-color: #F3F7FF;
  border-radius: 5px;
  padding: 1rem;

  label, input, textarea{
    margin: 0.75rem;
    height: 2rem;
    align-items: center;
    display: flex;
  }

  p{
    margin: 0 0.75rem;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  :last-child {
      justify-content: center;
    }
  :first-child {
    justify-content: space-between;
    align-items: center;
  }
`

const JobTitle = styled.h3`
  font-size: ${props => props.theme.fontxl};
`
const JobType = styled.h4`
  font-size: ${props => props.theme.fontml};
  background-color: #E7D9F9;
  color: #B385D3;
  margin: 0;
  padding: 0.5rem;
  border-radius: 5px;
`
const JobLevel = styled.h4`
  font-size: ${props => props.theme.fontml};
  background-color: #DBF0EA;
  color: #7cd3aa;
  margin: 0;
  padding: 0.5rem;
  border-radius: 5px;
`

const Button= styled.button`
  background-color: #466DD8;
  color: white;
  border-radius: 5px;
  border: 1px solid #466DD8;
  cursor: pointer;
  padding: 0.5rem;
  width: 50%;
`
const Date= styled.p`
  color: grey;
`
const Des= styled.div`
  p{
    margin-top: 1rem;
  }
`
const Text= styled.p`
  color: white;
`
const SubContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
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
const Btn = styled.button`
    display: inline-block;
    background-color: #304F5D;
    color: white;
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
const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 45%;

    @media (max-width: 64em) {
        width: 50%;
    }
`
const Error= styled.p`
    color: red;
`

const RowForm = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
  justify-content: space-between;
`
function JobModal({ onHandleModal }) {
  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };
  
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  //const scriptUrl = "https://script.google.com/macros/s/AKfycbxjiQvIJMO-T4DvGN4yQbCdDOrO6mn7GjJKT9LbvnkSeYIZgkqLYd5VZKEwK469zbanTA/exec"

  async function handleSubmit(values) {
    setIsFormSubmitted(true);
    const formData = new FormData();
    
    formData.append("myfile", file);
    formData.append("name", values.name)
    formData.append("email", values.email)
    formData.append("message", values.message)
      
      fetch('http://localhost:8000/sendemail', {
        method: 'POST', body: formData
        }).catch(err => {
        console.error(err);
        });
    }
  

  return(
    <Modal title="Apply For A Job" onHandleModal={onHandleModal}>
      <Formik
                initialValues={{ name: '', email: '', message: ''}}
                validationSchema={Yup.object({
                  name: Yup.string()
                      .required('* Required'),
                  email: Yup.string()
                      .email('Invalid email address')
                      .required('* Required'),
              })}
                onSubmit={values => handleSubmit(values)}
                >
                <StyledForm>
                <RowForm>
                  <Column>
                    <label htmlFor="name">Full Name</label>
                    <label htmlFor="email">Email Address</label>
                    <label htmlFor="message">Message</label>
                    <label htmlFor="file">Upload CV</label>
                  </Column>

                  <Column>
                    <Field id="name" placeholder="Lastname Firstname" name="name" type="text" />
                    <Error><ErrorMessage name="name" /></Error> 
                    <Field id="email" placeholder="Email Address" name="email" type="text" />
                    <Error><ErrorMessage name="email" /></Error>
                    <Field component="textarea" placeholder="Message" id="message" name="message"type="text"></Field>
                    <input id="file" name="file" type="file" onChange={saveFile} />
                    <p>Please name your CV as the following format: LastName.Firstname.JobPosition</p>
                  </Column>
                </RowForm>
                    {isFormSubmitted ?
                    <SuccessMessage>
                        Thank you for filling out your information! We will in touch with u shortly!
                    </SuccessMessage>
                    :
                    <Btn type="submit">Send application</Btn>
                    }
                    
                </StyledForm>
            </Formik>
    </Modal>
  )
}

function Jobs() {
  const [isShowModal, setIsShowModal]= useState(false)
    
  const handleShowModal = () =>{
      setIsShowModal(!isShowModal)
  }
  return (
    <>
    <Container>
      <Section>
        <SubContainer>
          <Title>Find Your Career. <br /> You deserve it. </Title>
          <Text>Find out what you like doing best, and get someone to pay you for doing it.</Text>
        </SubContainer>
        <Image src={jobs} alt="jobs"/>
      </Section>
      <Columns>
      {data.map((job, i) => 
        <>
          <Column>
            <Row key={i}>
              <JobTitle>{job.title}</JobTitle>
              <Date>{job.date}</Date>
            </Row>
            <Row>
              <JobType>{job.type}</JobType> 
              <JobLevel>{job.level}</JobLevel></Row>
            <Row><h3 style={{marginBottom: 0}}>Desciption</h3></Row>
            <Row><Des>{job.description}</Des></Row>
            <Row><h3 style={{marginBottom: 0}}>Requirements</h3></Row>
            <Row><Des>{job.skills}</Des></Row>
            <Row><h3 style={{marginBottom: 0}}>Nice to have</h3></Row>
            <Row><Des>{job.additional}</Des></Row>
            <Row><h3 style={{marginBottom: 0}}>Benefits</h3></Row>
            <Row><Des>{job.benefits}</Des></Row>
            <Row><Button onClick={handleShowModal}>Apply</Button></Row>
          </Column>
        </>
      )}
      </Columns>
    </Container>
    { isShowModal && <JobModal onHandleModal={handleShowModal} /> }
    </>
  )
}

export default Jobs