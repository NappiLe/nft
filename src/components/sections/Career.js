import React from 'react'
import styled from "styled-components"
import {Link } from "react-router-dom";
import career from '../../assets/career.jpg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #1C1C1E;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.body};
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};
  width: fit-content;
`;

const Text = styled.h3`
  font-size: ${props => props.theme.fontl};
  color: ${props => props.theme.body};
  width: fit-content;
  margin: 2rem 0;
`;

const Container = styled.div`
  width: 80%;
  margin: 1rem auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 64em) {
      flex-direction: column-reverse;
      align-items: center;
  }
`

const Image= styled.img`
  max-width: 45%;
`

const Box= styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 64em) {
      align-items: center;
  }
`

const StyledLink = styled(Link)`
  width: 60%;
  display: inline-block;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  outline: none;
  border: none;  
  font-weight: 600;
  
  font-size: ${props => props.theme.fontlg};
  padding: 1.5rem 3rem;
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

function Career() {

  return (
    <Section id="career">
      <Container>
          <Box>
            <Title>
              Career Opportunities
            </Title>
            <Text>
              Lorem ipsum nt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <StyledLink to="/jobs">
                Join us now
            </StyledLink>
            </Box>
            <Image src={career} alt="career"/>
      </Container>
    </Section>
  )
}

export default Career