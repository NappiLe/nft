import React from 'react'
import styled from "styled-components"
import jobs from '../assets/jobs.png';

const data = [
  {
    title: "Senior UI/UX",
    date: "7 Jun 2023",
    type: "Part-time",
    level: "Senior",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
  },
  {
    title: "Back-end developer",
    date: "1 Jun 2023",
    type: "Full-time",
    level: "Senior",
    description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
  },
  {
    title: "Front-end developer",
    date: "25 May 2023",
    type: "Full-time",
    level: "Junior",
    description: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
  },
  {
    title: "CTO",
    date: "15 March 2023",
    type: "Full-time",
    level: "Senior",
    description: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
  },
  {
    title: "Graphic designer",
    date: "11 March 2023",
    type: "Freelance",
    level: "Senior/ Junor",
    description: "Maecenas tempus, tellu. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
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
  width: 80%;
  
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid #F3F7FF;
  background-color: #F3F7FF;
  border-radius: 5px;
  padding: 1rem;
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
  min-height: 10rem;
`
const Text= styled.p`
  color: white;
`
const SubContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`

function Jobs() {
  return (
    <Container>
      <Section>
        <SubContainer>
          <Title>Find Your Career. <br /> You deserve it. </Title>
          <Text>Find out what you like doing best, and get someone to pay you for doing it.</Text>
        </SubContainer>
        <Image src={jobs} alt="jobs"/>
      </Section>
      <Columns>
      {data.map(job => 
        <>
          <Column>
            <Row>
              <JobTitle>{job.title}</JobTitle>
              <Date>{job.date}</Date>
            </Row>
            <Row>
              <JobType>{job.type}</JobType> 
              <JobLevel>{job.level}</JobLevel></Row>
            <Row><h3>Desciption</h3></Row>
            <Row><Des>{job.description}</Des></Row>
            <Row><Button>Apply</Button></Row>
          </Column>
        </>
      )}
          
      </Columns>
    </Container>
  )
}

export default Jobs