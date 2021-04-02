import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { CircularProgress } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Alert } from '../layout/Alert';
import { DateTime } from 'luxon';
import {
  StyledButton as Button,
  StyledFormikTextField as TextField,
  StyledDatePicker,
  H5,
} from '../styled';

const EditProfileSchema = Yup.object().shape({
  birthday: Yup.date(),
  location: Yup.string(),
  bio: Yup.string().max(160, 'Biography cannot be longer than 160 characters'),
  website: Yup.string().url('Must be a valid URL'),
  facebook: Yup.string().url('Must be a valid URL'),
  instagram: Yup.string().url('Must be a valid URL'),
  youtube: Yup.string().url('Must be a valid URL'),
  linkedin: Yup.string().url('Must be a valid URL'),
});

export const EditProfileForm = ({
  profileData: { bio, birthday, location, website, social },
  editProfileFunc,
  isLoading,
  isSuccess,
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          bio: bio || '',
          birthday: birthday || new Date(),
          location: location || '',
          website: website || '',
          facebook: social.facebook || '',
          instagram: social.instagram || '',
          youtube: social.youtube || '',
          linkedin: social.linkedin || '',
        }}
        validationSchema={EditProfileSchema}
        onSubmit={(values) => editProfileFunc(values)}
      >
        <Form>
          <H5 secondary $mB>
            General
          </H5>
          <Field
            component={TextField}
            name='bio'
            type='text'
            label='Biography'
            fullWidth={true}
            variant='outlined'
            multiline
            $mB='1rem'
            disabled={false}
          />
          <Field
            component={StyledDatePicker}
            margin='normal'
            name='birthday'
            label='Birthday'
            fullWidth={true}
            $mB='1rem'
            disabled={false}
            format='dd/MM/yyyy'
          />
          <Field
            component={TextField}
            name='location'
            type='text'
            label='Location'
            fullWidth={true}
            $mB='3rem'
            disabled={false}
          />
          <H5 secondary $mB>
            Website & Social
          </H5>
          <Field
            component={TextField}
            name='website'
            type='text'
            label='Website'
            fullWidth={true}
            $mB='1rem'
            disabled={false}
          />
          <Field
            component={TextField}
            name='facebook'
            type='text'
            label='Facebook'
            fullWidth={true}
            $mB='1rem'
            disabled={false}
          />

          <Field
            component={TextField}
            name='instagram'
            type='text'
            label='Instagram'
            fullWidth={true}
            $mB='1rem'
            disabled={false}
          />
          <Field
            component={TextField}
            name='youtube'
            type='text'
            label='YouTube'
            fullWidth={true}
            $mB='1rem'
            disabled={false}
          />
          <Field
            component={TextField}
            name='linkedin'
            type='text'
            label='LinkedIn'
            fullWidth={true}
            $mB='2rem'
            disabled={false}
          />
          {isSuccess && (
            <Alert
              type='success'
              msg='Profile successfully updated!'
              style={{ margin: '0' }}
            />
          )}
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
            $mT
            $medium
          >
            {isLoading ? 'Updating...' : 'Update Profile'}
          </Button>
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );
};
