import React from 'react'
import styled from "styled-components"
import jobs from '../assets/jobs.png';

const Title= styled.h1`
    font-size: ${props => props.theme.fontxl};
    text-transform: capitalize;
    align-self: flex-start;
    padding: 1rem;
    margin: 0;
    color: white;
`
const Image = styled.img`
    width: 50%;
    right: 0;
    position: absolute;
`
const Section = styled.section`
  background: #020E18;
  height: 314px;
`
const Container = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
`
const Columns = styled.div`
  display: flex;
   flex-direction: column;
   flex-grow: 1;
   border: 1px solid deeppink;
  .bg-red {
  background-color: red;
  }
  .bg-pink {
      background-color: pink;
  }
  .bg-orange {
      background-color: orange;
  }
`
function Jobs() {
  return (
    <>
    <Section>
      <Title>We are hiring</Title>
      <Image src={jobs} alt="jobs"/>
    </Section>
    {/* <Container>
        <Columns className="bg-red">123</Columns>
        <Columns className="bg-pink">123</Columns>
        <Columns className="bg-orange">123</Columns>
    </Container> */}
    </>
  )
}

export default Jobs