import React from 'react';
import { MainContainer, GridContainer } from '../styled';
import { useAuthState, useAuthDispatch } from '../../context';
import { Redirect, useHistory } from 'react-router-dom';
import { EditProfileForm } from './EditProfileForm';
import { CircularProgress } from '@material-ui/core';
import {
  usePostProfile,
  useGetCurrentProfile,
  useDeleteAccount,
} from '../../hooks';
import {
  StyledButton as Button,
  StyledDangerButton as DeleteButton,
  H3,
  FormContainer,
  Flex,
} from '../styled';

const EditProfile = () => {
  const history = useHistory();
  const { isAuthenticated, user } = useAuthState();
  const dispatch = useAuthDispatch();
  const { data: profileData, isLoading } = useGetCurrentProfile();
  const { mutate: editProfile, isSuccess } = usePostProfile();
  const { mutate: deleteAccount } = useDeleteAccount(dispatch);

  if (!isLoading && !profileData && !isAuthenticated) {
    return <Redirect to={`/login`} push />;
  }

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
                    onClick={() => history.push(`profile/${user._id}`)}
                  >
                    Return to Profile
                  </Button>

                  <DeleteButton
                    variant='contained'
                    color='secondary'
                    onClick={() => deleteAccount()}
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
