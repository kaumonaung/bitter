import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  StyledButton as Button,
  StyledFormikTextField as TextField,
} from '../styled';
import { CircularProgress } from '@material-ui/core';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(3, 'Too short!').required('Required'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match!'
  ),
});

export const SignUpForm = ({ signUpFunc, isLoading }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        signUpFunc(values);
      }}
    >
      {
        <Form autoComplete='off'>
          <Field
            component={TextField}
            name='name'
            type='text'
            label='Name'
            fullWidth={true}
            variant='outlined'
            $mB
          />
          <Field
            component={TextField}
            name='email'
            type='email'
            label='Email'
            fullWidth={true}
            variant='outlined'
            $mB
          />
          <Field
            component={TextField}
            name='password'
            type='password'
            label='Password'
            fullWidth={true}
            variant='outlined'
            $mB
          />
          <Field
            component={TextField}
            name='repeatPassword'
            type='password'
            label='Confirm Password'
            fullWidth={true}
            variant='outlined'
            $mB
          />
          <Button
            variant='contained'
            color='primary'
            fullWidth={true}
            type='submit'
            startIcon={
              isLoading && (
                <CircularProgress
                  size='1.5rem'
                  thickness={5}
                  style={{ color: '#fff' }}
                />
              )
            }
            $mB
            $medium
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </Form>
      }
    </Formik>
  );
};
