import React from 'react'
import styled from "styled-components"

const Modal= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: white;
    z-index: 100;
`

const Section= styled.div`
 position:fixed;
  background: black;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`
function JobAd() {
  return (
    <Modal>
        <Section>JobAd</Section>
    </Modal>
  )
}

export default JobAd