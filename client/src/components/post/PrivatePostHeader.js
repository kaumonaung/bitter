import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import EditPostForm from './EditPostForm';
import { useHistory } from 'react-router-dom';
import AddCommentForm from '../comment/AddCommentForm';
import { CircularProgress } from '@material-ui/core';
import {
  useLikePost,
  useDislikePost,
  useEditPost,
  useAddComment,
  useDeletePost,
} from '../../hooks';
import {
  PrimaryColorContainer as MainContainer,
  StyledLikedWrapper as LikeWrapper,
  StyledButton as Button,
  WeakDangerButton as DangerButton,
  Flex,
  PostItemAuthor,
  Text,
  GreyIcon as StyledIcon,
  SlimDivider,
} from '../styled';

const PrivatePostHeader = ({
  post: { text, name, likes, user, createdAt, edited, _id, comments },
  user: loggedInUser,
  query,
  isLoading,
}) => {
  const history = useHistory();
  const [showingEditPost, setShowingEditPost] = useState(false);
  const [showingAddComment, setShowingAddComment] = useState(false);
  const { mutate: likePost } = useLikePost(_id, query);
  const { mutate: dislikePost } = useDislikePost(_id, query);

  const { mutate: editPost, isLoading: loadingEditPost } = useEditPost(
    _id,
    query
  );
  const { mutate: addComment, isLoading: loadingAddComment } = useAddComment(
    _id,
    query
  );
  const { mutate: deletePost, isSuccess } = useDeletePost(_id, query);

  if (isSuccess) {
    history.push(`/profile/${loggedInUser._id}`);
  }

  return (
    <MainContainer square={true} elevation={0} variant='outlined' $xs>
      {isLoading ? (
        <Flex center>
          <CircularProgress thickness={5} />
        </Flex>
      ) : (
        <>
          <Flex $mB='0.9rem' spaceBetween>
            <Flex style={{ alignItems: 'center' }}>
              <PostItemAuthor
                $size='1rem'
                $mR='1rem'
                onClick={() => history.push(`/profile/${user}`)}
              >
                {name}
              </PostItemAuthor>
              <Text $size='0.9rem'>
                Posted on{' '}
                {`${DateTime.fromISO(createdAt).toLocaleString(
                  DateTime.DATE_FULL
                )}`}
              </Text>
            </Flex>
            {edited === true && (
              <Text $size='0.9rem' $mR='0.5rem' grey>
                Edited
              </Text>
            )}
          </Flex>
          <Text $size='1.2rem' $mB='2rem' $mT='1rem'>
            {text}
          </Text>
          <Flex spaceBetween>
            <Flex center>
              <div style={{ marginRight: '1rem' }}>
                {likes.some((like) => like.user === loggedInUser._id) ? (
                  <Flex>
                    <LikeWrapper>
                      <AiFillHeart style={{}} onClick={() => dislikePost()} />
                    </LikeWrapper>
                    <Text $size='1.2rem' $mL='0.5rem' grey>
                      {likes.length}
                    </Text>
                  </Flex>
                ) : (
                  <Flex>
                    <LikeWrapper>
                      <AiOutlineHeart onClick={() => likePost()} />
                    </LikeWrapper>
                    <Text $size='1.2rem' $mL='0.5rem' grey>
                      {likes.length}
                    </Text>
                  </Flex>
                )}
              </div>
              <div style={{ marginLeft: '1rem' }}>
                <Flex>
                  <StyledIcon>
                    <FaCommentDots />
                  </StyledIcon>
                  <Text $size='1.2rem' $mL='0.5rem' grey>
                    {comments.length}
                  </Text>
                </Flex>
              </div>
            </Flex>
            {user === loggedInUser._id && (
              <Flex>
                <Button onClick={() => setShowingEditPost(!showingEditPost)}>
                  Edit
                </Button>
                <DangerButton onClick={() => deletePost()}>Delete</DangerButton>
              </Flex>
            )}
          </Flex>
          {showingEditPost && (
            <EditPostForm
              showingEditPost={showingEditPost}
              setShowingEditPost={setShowingEditPost}
              loadingEditPost={loadingEditPost}
              submitFunc={editPost}
              text={text}
            />
          )}
          <SlimDivider />
          {loggedInUser && !showingAddComment && (
            <Flex>
              <Button
                variant='contained'
                color='primary'
                $mR='1rem'
                $mT='1rem'
                onClick={() => setShowingAddComment(!showingAddComment)}
              >
                Add Comment
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => history.goBack()}
                $mT='1rem'
              >
                Return
              </Button>
            </Flex>
          )}
          {showingAddComment && (
            <Flex column $vPad='1rem'>
              <Text $bold $size='1rem' $mB='1rem'>
                Add Comment
              </Text>
              <AddCommentForm
                showingAddComment={showingAddComment}
                setShowingAddComment={setShowingAddComment}
                submitFunc={addComment}
                loadingAddComment={loadingAddComment}
              />
            </Flex>
          )}
        </>
      )}
    </MainContainer>
  );
};

export default PrivatePostHeader;
