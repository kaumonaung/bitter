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
  StyledLikedButton as LikeButton,
  StyledIcon,
  StyledButton as Button,
  WeakDangerButton as DangerButton,
  Flex,
  PostItemAuthor,
  Text,
} from '../styled';

const PostItem = ({
  post: { text, name, likes, user, createdAt, updatedAt, _id },
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
        <Flex>
          <div style={{ marginRight: '0.5rem' }}>
            {likes.some((like) => like.user === loggedInUser._id) ? (
              <LikeButton>
                <AiFillHeart onClick={() => dislikePost()} />
              </LikeButton>
            ) : (
              <StyledIcon>
                <AiOutlineHeart onClick={() => likePost()} />
              </StyledIcon>
            )}
          </div>
          <div style={{ marginLeft: '0.5rem' }}>
            <StyledIcon onClick={() => history.push(`/posts/${_id}`)}>
              <FaCommentDots />
            </StyledIcon>
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
