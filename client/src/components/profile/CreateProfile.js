import React, { useEffect } from 'react';
import { usePostProfile, useGetCurrentProfile } from '../../hooks';
import { CreateProfileForm } from './CreateProfileForm';
import { useAuthState } from '../../context';
import { Redirect } from 'react-router-dom';
import { MainContainer, GridContainer, FormContainer, H3 } from '../styled';

const CreateProfile = () => {
  const { isAuthenticated } = useAuthState();
  const { data, isLoading, mutate: createProfile } = usePostProfile();

  useEffect(() => {
    if (isAuthenticated) {
      document.getElementsByClassName(
        'MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters'
      )[0].style.display = 'none';
    }
  }, []);

  // TODO: load user in useEffect to check for authentification
  // if (!isAuthenticated) {
  //   return <Redirect to={`/login`} push />;
  // }

  if (data) {
    document.getElementsByClassName(
      'MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters'
    )[0].style.display = 'flex';
    return <Redirect to={`/profile/${data._id}`} push />;
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
          <FormContainer>
            <div style={{ marginBottom: '1rem' }}>
              <H3 primary $mT $mB>
                Edit your profile
              </H3>
              <p>All fields are optional</p>
            </div>
            <CreateProfileForm
              createProfileFunc={createProfile}
              isLoading={isLoading}
            />
          </FormContainer>
        </GridContainer>
      </MainContainer>
    </>
  );
};

export default CreateProfile;
