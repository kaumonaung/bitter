import React, { useEffect } from 'react';
import { usePostProfile, useGetCurrentProfile } from '../../hooks';
import { MainContainer, GridContainer } from '../styled';
import { useAuthState } from '../../context';
import { Redirect } from 'react-router-dom';
import { EditProfileForm } from './EditProfileForm';
import { CircularProgress, Button as MUIButton } from '@material-ui/core';
import {
  StyledButton as Button,
  H3,
  StyledLink as Link,
  FormContainer,
  Flex,
} from '../styled';

const EditProfile = () => {
  const { isAuthenticated } = useAuthState();
  const { data: profileData, isLoading } = useGetCurrentProfile();
  const { mutate: editProfile } = usePostProfile();

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
              <div style={{ marginBottom: '1rem' }}>
                <H3 primary $mT $mB>
                  Edit your profile
                </H3>
                <Flex $row>
                  <Link to={`/profile/${profileData._id}`}>
                    <Button variant='outlined' $mB>
                      Return to Profile
                    </Button>
                  </Link>
                  // TODO: Create "Danger" Button to delete the account
                  <MUIButton variant='contained' color='secondary'>
                    Delete Account
                  </MUIButton>
                </Flex>
              </div>

              <EditProfileForm
                profileData={profileData}
                editProfileFunc={editProfile}
                isLoading={isLoading}
              />
            </FormContainer>
          )}
        </GridContainer>
      </MainContainer>
    </>
  );
};

export default EditProfile;
