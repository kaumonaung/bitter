import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Button)`
  margin-top: ${(props) => (props.$mT ? '1rem' : '0')};
  margin-right: ${(props) => (props.$mR ? '1rem' : '0')};
  margin-bottom: ${(props) => (props.$mB ? '1rem' : '0')};
  margin-left: ${(props) => (props.$mL ? '1rem' : '0')};

  ${(props) => {
    if (props.$small)
      return `
      padding: 0.5rem
      `;

    if (props.$medium)
      return `
      padding: 0.8rem
      `;

    if (props.$large)
      return `
      padding: 1rem
      `;
  }}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  margin-top: ${(props) => props.$mT && '1rem'};
  margin-right: ${(props) => props.$mR && '1rem'};
  margin-bottom: ${(props) => props.$mB && '1rem'};
  margin-left: ${(props) => props.$mL && '1rem'};
`;

export const StyledDangerButton = styled(Button)`
  margin-top: ${(props) => (props.$mT ? '1rem' : '0')};
  margin-right: ${(props) => (props.$mR ? '1rem' : '0')};
  margin-bottom: ${(props) => (props.$mB ? '1rem' : '0')};
  margin-left: ${(props) => (props.$mL ? '1rem' : '0')};

  ${(props) => {
    if (props.$small)
      return `
      padding: 0.5rem
      `;

    if (props.$medium)
      return `
      padding: 0.8rem
      `;

    if (props.$large)
      return `
      padding: 1rem
      `;
  }}

  background-color: #c62828;
  &:hover {
    background-color: #8e0000;
  }
`;
