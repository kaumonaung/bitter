import React, { useRef, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useAuthDispatch } from '../../context';
import { CreatePostForm } from '../post';
import { useHistory } from 'react-router-dom';
import { PrivatePostItem, PostItem } from '../post/';
import {
  useGetFeed,
  useIntersectionObserver,
  useGetCurrentUser,
  useCreatePost,
  useGetCurrentProfile,
} from '../../hooks';
import {
  GridContainer,
  FeedPrimaryBtn as PrimaryButton,
  FeedSecondaryBtn as SecondaryButton,
  FeedHeader as Header,
  H4,
  Flex,
  Text,
} from '../styled';

const Feed = () => {
  const dispatch = useAuthDispatch();
  const [showingCreatePost, setShowingCreatePost] = useState(false);
  const history = useHistory();
  const { data: user } = useGetCurrentUser(dispatch);
  const { mutate: createPost, loadingCreatingPost } = useCreatePost('postFeed');
  const { data: profile } = useGetCurrentProfile();

  const { data, fetchNextPage, hasNextPage } = useGetFeed();

  const scrollObserver = useRef();

  useIntersectionObserver({
    target: scrollObserver,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <GridContainer container containerdirection='column' justify='center'>
      <GridContainer container item direction='column' $maxWidth='600px'>
        <Header square={true} elevation={0} variant='outlined' $sm $img>
          <H4 style={{ color: 'white' }}>
            See what everyone is complaining about
          </H4>
          {user && (
            <>
              <Flex $mT='2rem'>
                {!showingCreatePost && (
                  <PrimaryButton
                    variant='contained'
                    $mR
                    onClick={() => setShowingCreatePost(!showingCreatePost)}
                  >
                    Add Post
                  </PrimaryButton>
                )}

                {profile && !showingCreatePost && (
                  <SecondaryButton
                    variant='outlined'
                    color='primary'
                    $mL
                    onClick={() => history.push(`/profile/${user._id}`)}
                  >
                    My Profile
                  </SecondaryButton>
                )}
              </Flex>
            </>
          )}
        </Header>

        <>
          {showingCreatePost && (
            <Header square={true} elevation={0} variant='outlined' $sm>
              <Text $bold $size='1rem' $mB='1rem'>
                Create Post
              </Text>
              <CreatePostForm
                showingCreatePost={showingCreatePost}
                setShowingCreatePost={setShowingCreatePost}
                submitFunc={createPost}
                loadingCreatingPost={loadingCreatingPost}
              />
            </Header>
          )}
          {data &&
            data.pages.map((page, index) => (
              <div key={index}>
                {page.results.map((post) => (
                  <>
                    {user ? (
                      <PrivatePostItem
                        post={post}
                        key={post._id}
                        user={user}
                        query='postFeed'
                      />
                    ) : (
                      <PostItem post={post} key={post._id} />
                    )}
                  </>
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
        </>
      </GridContainer>
    </GridContainer>
  );
};

export default Feed;
