import React from 'react'
import styled from "styled-components"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

function About() {
  return (
    <Section>About</Section>
  )
}

export default About