import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import {
  useLikePost,
  useDislikePost,
  useEditPost,
  useDeletePost,
} from '../../hooks';
import { useQueryClient } from 'react-query';

import EditPostForm from './EditPostForm';
import { useHistory } from 'react-router-dom';
import {
  StyledPaper as MainContainer,
  StyledLikedWrapper as LikeWrapper,
  StyledIcon,
  StyledButton as Button,
  WeakDangerButton as DangerButton,
  Flex,
  PostItemAuthor,
  Text,
} from '../styled';

const PrivatePostItem = ({
  post: { text, name, likes, user, createdAt, updatedAt, _id, comments },
  user: loggedInUser,
  query,
}) => {
  const history = useHistory();
  const [showingEditPost, setShowingEditPost] = useState(false);
  const { mutate: likePost } = useLikePost(_id, query);
  const { mutate: dislikePost } = useDislikePost(_id, query);

  const { mutate: editPost, isLoading: loadingEditPost } = useEditPost(
    _id,
    query
  );
  const { mutate: deletePost } = useDeletePost(_id, query);

  return (
    <MainContainer square={true} elevation={0} variant='outlined' $xs>
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
            Posted on {`${DateTime.fromISO(createdAt).toFormat('dd/MM/yyyy')}`}
          </Text>
        </Flex>
        {createdAt != updatedAt && (
          <Text $size='0.9rem' $mR='0.5rem' grey>
            Edited
          </Text>
        )}
      </Flex>
      <Text
        $size='1.2rem'
        $mB='2rem'
        $mT='1rem'
        onClick={() => history.push(`/posts/${_id}`)}
      >
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
              <StyledIcon onClick={() => history.push(`/posts/${_id}`)}>
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
    </MainContainer>
  );
};

export default PrivatePostItem;
