import React from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";

import ETH from "../../assets/icons8-ethereum-48.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)};
`

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 20s linear infinite ${props => props.direction};
`

  const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${props => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  img{
    width: 100%;
    height: auto;
  }
  `

const Details= styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}

`

const NftItem = ({img, number, price = 0}) => {
    return(
      <ImageContainer>
        <img src={img} alt="The Weirdos" />
        <Details>
          <div>
            <span>Weirdos</span> <br />
            <h1>#{number}</h1>
          </div>

          <div>
            <span>Price</span>
            <Price>
              <img src={ETH} alt="ETH" />
              <h1>{Number(price).toFixed(1)}</h1>
            </Price>
          </div>
        </Details>
      </ImageContainer>
    )
  } 

function Showcase() {
  return (
    <Section>
      <Row direction='none'>
        <NftItem img={img1} number={852} price={1.5} />
        <NftItem img={img2} number={123} price={1.2} />
        <NftItem img={img3} number={456} price={2.5} />
        <NftItem img={img4} number={666} price={3.5} />
        <NftItem img={img5} number={157} price={5.9} />
      </Row>

      <Row direction='reverse'>
        <NftItem img={img6} number={888} price={1.8} />
        <NftItem img={img7} number={211} price={3.3} />
        <NftItem img={img8} number={455} price={9.5} />
        <NftItem img={img9} number={579} price={7.1} />
        <NftItem img={img10} number={876} price={8.2} />
      </Row>
    </Section>
  )
}

export default Showcase