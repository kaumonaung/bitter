import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const StyledTextField = styled(TextField)`
  margin-top: ${(props) => (props.$mT ? '1rem' : '0')};
  margin-bottom: ${(props) => (props.$mB ? '1rem' : '0')};
`;
