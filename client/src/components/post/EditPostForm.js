import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { CircularProgress } from '@material-ui/core';
import {
  StyledButton as Button,
  StyledFormikTextField as TextField,
} from '../styled';

const EditPostSchema = Yup.object().shape({
  postText: Yup.string()
    .min(2, 'Post must be at least 2 characters long.')
    .max(280, 'Post cannot be longer than 280 characters.'),
});

const EditPostForm = ({
  showingEditPost,
  setShowingEditPost,
  submitFunc,
  loadingEditPost,
  text,
}) => {
  return (
    <Formik
      initialValues={{ postText: text }}
      validationSchema={EditPostSchema}
      onSubmit={(values) => {
        submitFunc(values);
        setShowingEditPost(false);
      }}
    >
      {
        <Form autoComplete='off'>
          <Field
            component={TextField}
            name='postText'
            type='text'
            label='Create Post'
            multiline
            rows={3}
            variant='outlined'
            disabled={false}
            fullWidth={true}
            style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
          />

          <Button
            variant='contained'
            color='primary'
            type='submit'
            startIcon={
              loadingEditPost && (
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

          {showingEditPost && (
            <Button
              variant='outlined'
              color='primary'
              type='submit'
              $mL
              onClick={() => setShowingEditPost(false)}
            >
              Cancel
            </Button>
          )}
        </Form>
      }
    </Formik>
  );
};

export default EditPostForm;
