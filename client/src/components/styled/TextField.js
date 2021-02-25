import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { TextField as FormikTextField } from 'formik-material-ui';

export const StyledTextField = styled(TextField)`
  margin-top: ${(props) => (props.$mT ? '1rem' : '0')};
  margin-bottom: ${(props) => (props.$mB ? '1rem' : '0')};
`;

export const StyledFormikTextField = styled(FormikTextField)`
  margin-top: ${(props) => (props.$mT ? '1rem' : '0')};
  margin-bottom: ${(props) => (props.$mB ? '1rem' : '0')};
`;
