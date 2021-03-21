import React, { useEffect } from 'react';
import { usePostProfile, useGetCurrentProfile } from '../../hooks';
import { MainContainer, GridContainer } from '../styled';
import { useAuthState, useAuthDispatch, deleteAccount } from '../../context';
import { Redirect, useHistory } from 'react-router-dom';
import { EditProfileForm } from './EditProfileForm';
import { CircularProgress } from '@material-ui/core';

import {
  StyledButton as Button,
  StyledDangerButton as DeleteButton,
  H3,
  FormContainer,
  Flex,
} from '../styled';

const EditProfile = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuthState();
  const dispatch = useAuthDispatch();
  const { data: profileData, isLoading } = useGetCurrentProfile();
  const { mutate: editProfile, isSuccess } = usePostProfile();

  if (!isLoading && !profileData && !isAuthenticated) {
    return <Redirect to={`/login`} push />;
  }

  const handleDelete = async () => {
    try {
      const isDeleted = await deleteAccount(dispatch);

      if (isDeleted) {
        return history.push('/');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <MainContainer>
        <GridContainer
          container
          containerdirection='row'
          justify='center'
          alignItems='center'
        >
          {isLoading ? (
            <CircularProgress thickness={5} />
          ) : (
            <FormContainer>
              <div style={{ marginBottom: '2rem' }}>
                <H3 primary $mT $mB>
                  Edit your profile
                </H3>
                <Flex $row>
                  <Button
                    variant='outlined'
                    onClick={() => history.push(`profile/${profileData._id}`)}
                  >
                    Return to Profile
                  </Button>

                  <DeleteButton
                    variant='contained'
                    color='secondary'
                    onClick={() => handleDelete()}
                    $mL
                  >
                    Delete Account
                  </DeleteButton>
                </Flex>
              </div>

              <EditProfileForm
                profileData={profileData}
                editProfileFunc={editProfile}
                isLoading={isLoading}
                isSuccess={isSuccess}
              />
            </FormContainer>
          )}
        </GridContainer>
      </MainContainer>
    </>
  );
};

export default EditProfile;
