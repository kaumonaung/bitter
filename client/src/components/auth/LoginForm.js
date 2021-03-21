import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  StyledButton as Button,
  StyledFormikTextField as TextField,
} from '../styled';
import { CircularProgress } from '@material-ui/core';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(3, 'Too short!').required('Required'),
});

export const LoginForm = ({ logInFunc, isLoading }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => logInFunc(values)}
    >
      {
        <Form autoComplete='off'>
          <Field
            component={TextField}
            name='email'
            type='email'
            label='Email'
            fullWidth={true}
            variant='outlined'
            $mB='1rem'
            disabled={false}
          />
          <Field
            component={TextField}
            name='password'
            type='password'
            label='Password'
            fullWidth={true}
            variant='outlined'
            $mB='1rem'
            disabled={false}
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
            {isLoading ? 'Logging In...' : 'Log In'}
          </Button>
        </Form>
      }
    </Formik>
  );
};
