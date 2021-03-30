import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { useLikePost, useDislikePost, useEditPost } from '../../hooks';
import { useQueryClient } from 'react-query';
import { deletePost } from '../../context';
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

const PostItem = ({
  post: { text, name, likes, user, createdAt, updatedAt, _id, comments },
  user: loggedInUser,
  query,
}) => {
  const queryClient = useQueryClient();
  const history = useHistory();
  const [showingEditPost, setShowingEditPost] = useState(false);
  const { mutate: likePost } = useLikePost(_id, query);
  const { mutate: dislikePost } = useDislikePost(_id, query);
  const { mutate: editPost, isLoading: loadingEditPost } = useEditPost(_id);

  const handleDelete = async () => {
    try {
      const isDeleted = await deletePost(_id);
      if (isDeleted) {
        queryClient.invalidateQueries(query);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainContainer square={true} elevation={0} variant='outlined' $xs>
      <Flex $mB='0.9rem' spaceBetween>
        <Flex>
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
              <LikeWrapper>
                <AiOutlineHeart onClick={() => likePost()} />
              </LikeWrapper>
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
            <DangerButton onClick={() => handleDelete()}>Delete</DangerButton>
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

export default PostItem;
