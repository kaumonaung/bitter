import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { CircularProgress } from '@material-ui/core';
import {
  StyledButton as Button,
  StyledFormikTextField as TextField,
} from '../styled';

const AddCommentSchema = Yup.object().shape({
  postText: Yup.string()
    .min(2, 'Comment must be at least 2 characters long.')
    .max(280, 'Comment cannot be longer than 280 characters.'),
});

const AddCommentForm = ({
  showingAddComment,
  setShowingAddComment,
  submitFunc,
  loadingAddComment,
}) => {
  return (
    <Formik
      initialValues={{ postText: '' }}
      validationSchema={AddCommentSchema}
      onSubmit={(values) => {
        submitFunc(values);
        setShowingAddComment(false);
      }}
    >
      {
        <Form autoComplete='off'>
          <Field
            component={TextField}
            name='postText'
            type='text'
            label='Comment'
            multiline
            rows={5}
            variant='outlined'
            disabled={false}
            fullWidth={true}
            style={{ marginBottom: '1rem' }}
          />

          <Button
            variant='contained'
            color='primary'
            type='submit'
            startIcon={
              loadingAddComment && (
                <CircularProgress
                  size='1.5rem'
                  thickness={5}
                  style={{ color: '#fff' }}
                />
              )
            }
            $mR
          >
            Sumbit
          </Button>

          {showingAddComment && (
            <Button
              variant='outlined'
              color='primary'
              type='submit'
              $mL
              onClick={() => setShowingAddComment(false)}
            >
              Cancel
            </Button>
          )}
        </Form>
      }
    </Formik>
  );
};

export default AddCommentForm;
