import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'

import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
  display: flex;

  flex-direction: column;
  color: ${props => props.theme.text};
`
const Container= styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.text};
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  &>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
      transform: scale(1.2);
    }
  }
`

const MenuItem = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`
const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after{
        content: ' ';
        display: block;
        width: 0%;
        height: 2px;
        background: ${props => props.theme.text};
        transition: width 0.3s ease;
    }

    &:hover::after{
        width: 100%;
    }
`

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: underline;
  }

`
function Footer() {
  const scrollTo = (id) => {
    let element = document.getElementById(id)

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
}
  return (
    <Section>
      <Banner/>
      <Container>
        <Left>
            <Logo />
            <IconList>
              <a 
                href="http://facebook.com" 
                target={'_blank'}
                rel="noopener noreferrer">
                <Facebook />
              </a>
              <a 
                href="http://instgram.com" 
                target={'_blank'}
                rel="noopener noreferrer">
                <Instagram />
              </a>
              <a 
                href="http://twitter.com" 
                target={'_blank'}
                rel="noopener noreferrer">
                <Twitter />
              </a>
              <a 
                href="http://linkedin.com" 
                target={'_blank'}
                rel="noopener noreferrer">
                <LinkedIn />
              </a>
            </IconList>
        </Left>
        <MenuItem>
          <Item onClick={()=> scrollTo('home')}>Home</Item>
          <Item onClick={()=> scrollTo('about')}>About</Item>
          <Item onClick={()=> scrollTo('roadmap')}>Roadmap</Item>
          <Item onClick={()=> scrollTo('showcase')}>Showcase</Item>
          <Item onClick={()=> scrollTo('team')}>Team</Item>
          <Item onClick={()=> scrollTo('faq')}>Faq</Item>
        </MenuItem>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by Koi
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer