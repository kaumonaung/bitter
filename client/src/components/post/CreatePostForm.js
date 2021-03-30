import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { CircularProgress } from '@material-ui/core';
import {
  StyledButton as Button,
  StyledFormikTextField as TextField,
} from '../styled';

const CreatePostSchema = Yup.object().shape({
  postText: Yup.string()
    .min(2, 'Post must be at least 2 characters long.')
    .max(280, 'Post cannot be longer than 280 characters.'),
});

const CreatePostForm = ({
  showingCreatePost,
  setShowingCreatePost,
  submitFunc,
  loadingCreatingPost,
}) => {
  return (
    <Formik
      initialValues={{ postText: '' }}
      validationSchema={CreatePostSchema}
      onSubmit={(values) => {
        submitFunc(values);
        setShowingCreatePost(false);
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
            placeholder='Type in the new post'
            style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
          />

          <Button
            variant='contained'
            color='primary'
            type='submit'
            startIcon={
              loadingCreatingPost && (
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

          {showingCreatePost && (
            <Button
              variant='outlined'
              color='primary'
              type='submit'
              $mL
              onClick={() => setShowingCreatePost(false)}
            >
              Cancel
            </Button>
          )}
        </Form>
      }
    </Formik>
  );
};

export default CreatePostForm;
