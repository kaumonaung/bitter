import React, { useState } from 'react';
import { CreatePostForm } from '../post';
import { DateTime } from 'luxon';
import { useCreatePost } from '../../hooks';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  AiOutlineGlobal,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import {
  Flex,
  StyledIcon,
  ProfileName,
  Text,
  ProfileHeading,
  ProfileBox,
  StyledButton,
  StyledPaper as MainContainer,
  StyledButton as Button,
} from '../styled';

const PrivateProfileHeader = ({ profile, isLoading, user }) => {
  const { isLoading: loadingCreatingPost, mutate } = useCreatePost('userPosts');
  const [showingCreatePost, setShowingCreatePost] = useState(false);
  const history = useHistory();

  return (
    <MainContainer square={true} elevation={0} variant='outlined' $xs>
      {isLoading ? (
        <Flex center>
          <CircularProgress thickness={5} />
        </Flex>
      ) : (
        <>
          <Flex center>
            <ProfileName>{profile.name}</ProfileName>
          </Flex>
          <Flex $content='space-between'>
            <ProfileBox $vPad='0.5rem' $mR='1.5rem'>
              <ProfileHeading>Location</ProfileHeading>
              <Text $size='1rem'>
                {profile.location
                  ? `Currently in ${profile.location}`
                  : 'No location'}
              </Text>
            </ProfileBox>

            <ProfileBox $vPad='0.5rem'>
              <ProfileHeading>Birthday</ProfileHeading>
              <Text $size='1rem'>
                {`${DateTime.fromISO(profile.birthday).toLocaleString(
                  DateTime.DATE_FULL
                )}`}
              </Text>
            </ProfileBox>
          </Flex>

          <ProfileBox $vPad='0.5rem'>
            <ProfileHeading>Biography</ProfileHeading>
            <Text $size='1rem'>{profile.bio ? profile.bio : 'No bio'}</Text>
          </ProfileBox>

          <>
            {!profile.website &&
            !profile.social.facebook &&
            !profile.social.instagram &&
            !profile.social.youtube &&
            !profile.social.linkedin ? (
              <div style={{ display: 'none' }}></div>
            ) : (
              <Flex $vPad='0.5rem'>
                <ProfileBox>
                  <ProfileHeading>Website & Social Links</ProfileHeading>
                  {profile.website && (
                    <StyledIcon
                      href={profile.website}
                      target='_blank'
                      $mR='1rem'
                    >
                      <AiOutlineGlobal />
                    </StyledIcon>
                  )}

                  {profile.social.youtube && (
                    <StyledIcon
                      href={profile.social.youtube}
                      target='_blank'
                      $mR='1rem'
                    >
                      <AiFillYoutube />
                    </StyledIcon>
                  )}

                  {profile.social.instagram && (
                    <StyledIcon
                      href={profile.social.instagram}
                      target='_blank'
                      $mR='1rem'
                    >
                      <AiFillInstagram />
                    </StyledIcon>
                  )}

                  {profile.social.facebook && (
                    <StyledIcon
                      href={profile.social.facebook}
                      target='_blank'
                      $mR='1rem'
                    >
                      <AiFillFacebook />
                    </StyledIcon>
                  )}

                  {profile.social.linkedin && (
                    <StyledIcon href={profile.social.linkedin} target='_blank'>
                      <AiFillLinkedin />
                    </StyledIcon>
                  )}
                </ProfileBox>
              </Flex>
            )}
          </>

          {user && user._id === profile.user && (
            <>
              {!showingCreatePost && (
                <StyledButton
                  variant='contained'
                  color='primary'
                  $mT='0.5rem'
                  $mR='1rem'
                  onClick={() => setShowingCreatePost(!showingCreatePost)}
                >
                  Create Post
                </StyledButton>
              )}

              {showingCreatePost && (
                <Flex column $vPad='1rem'>
                  <Text $bold $size='1rem' $mB='1rem'>
                    Create Post
                  </Text>
                  <CreatePostForm
                    showingCreatePost={showingCreatePost}
                    setShowingCreatePost={setShowingCreatePost}
                    submitFunc={mutate}
                    loadingCreatingPost={loadingCreatingPost}
                  />
                </Flex>
              )}
            </>
          )}

          <Button
            color='primary'
            variant='outlined'
            $mT='0.5rem'
            onClick={() => history.goBack()}
          >
            Return
          </Button>
        </>
      )}
    </MainContainer>
  );
};

export default PrivateProfileHeader;
