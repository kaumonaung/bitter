import React, { useRef } from 'react';
import {
  useGetProfileById,
  useGetUsersPosts,
  useIntersectionObserver,
  useGetCurrentUser,
} from '../../hooks';
import { GridContainer, Divider, Flex } from '../styled';
import ProfileHeader from './ProfileHeader';
import { PostItem } from '../post';
import { CircularProgress } from '@material-ui/core';
import { useAuthDispatch } from '../../context';

const Profile = ({ match }) => {
  const dispatch = useAuthDispatch();
  const { data: profile, isLoading: loadingProfile } = useGetProfileById(
    match.params.user_id
  );
  const { data, fetchNextPage, hasNextPage } = useGetUsersPosts(
    match.params.user_id
  );

  const { data: user } = useGetCurrentUser(dispatch);

  const scrollObserver = useRef();

  useIntersectionObserver({
    target: scrollObserver,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <GridContainer container containerdirection='column' justify='center'>
        <GridContainer container item direction='column' $maxWidth='600px'>
          {profile && (
            <>
              <ProfileHeader
                profile={profile}
                isLoading={loadingProfile}
                user={user}
              />
              <Divider />
            </>
          )}

          {data &&
            data.pages.map((page, index) => (
              <div key={index}>
                {page.results.map((post) => (
                  <PostItem
                    post={post}
                    key={post._id}
                    user={user}
                    query='userPosts'
                  />
                ))}
              </div>
            ))}

          <div ref={scrollObserver} style={{ height: '3rem' }}>
            {hasNextPage && (
              <Flex center $vPad='3rem'>
                <CircularProgress thickness={5} />
              </Flex>
            )}
          </div>
        </GridContainer>
      </GridContainer>
    </>
  );
};

export default Profile;
