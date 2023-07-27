import React from 'react'
import styled from 'styled-components'

const Overlay= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`
const Modal= styled.div`
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;
    border-radius: 1.5rem;
`
const Container= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #304f5d;
    margin: 0 auto;
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 1rem;
    color: ${props => props.theme.body};
`
const Title= styled.h2`
    font-size: ${props => props.theme.fontxl};
    text-transform: capitalize;
    align-self: flex-start;
    padding: 1rem;
`

function Login({onHandleLoginModal}) {
    return (
        <Overlay>
            <Modal>
                <Container>
                    <Title>Login</Title>
                </Container>
            </Modal>
        </Overlay>
    )
}

export default Login;