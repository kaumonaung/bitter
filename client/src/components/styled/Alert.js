import styled from 'styled-components';

export const AlertContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 3px;
  margin: 0.5rem 0;

  background-color: ${(props) => props.$error && 'rgb(253, 236, 234)'};
  background-color: ${(props) => props.$warning && 'rgb(255, 244, 229)'};
  background-color: ${(props) => props.$info && 'rgb(232, 244, 253)'};
  background-color: ${(props) => props.$success && 'rgb(237, 247, 237)'};
`;

export const AlertTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;

  color: ${(props) => props.$error && 'rgb(97, 26, 21)'};
  color: ${(props) => props.$warning && 'rgb(102, 60, 0)'};
  color: ${(props) => props.$info && 'rgb(13, 60, 97)'};
  color: ${(props) => props.$success && 'rgb(30, 70, 32)'};
`;

export const AlertIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;

  color: ${(props) => props.$error && '#f44336'};
  color: ${(props) => props.$warning && '#ff9800'};
  color: ${(props) => props.$info && '#2196f3'};
  color: ${(props) => props.$success && '#4caf50'};
`;
