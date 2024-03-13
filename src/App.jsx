import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff8a00, #e52e71, #3a1c71);
  background-size: 400% 400%;
  animation: ${rainbowAnimation} 10s linear infinite;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 200px;
  border-radius: 5px;
  color: black;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Title>Welcome to my React page!</Title>
      <Button onClick={openModal}>Click me</Button>
      <ModalWrapper isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <p>This is a modal message</p>
          <p>You can close this modal by clicking the X button.</p>
        </ModalContent>
      </ModalWrapper>
    </Container>
  );
}

export default App;
