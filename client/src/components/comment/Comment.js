import React from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useDeleteComment } from '../../hooks';
import {
  Flex,
  Text,
  PostItemAuthor,
  WeakDangerButton as DangerButton,
  StyledPaper as CommentContainer,
} from '../styled';

const Comment = ({
  comment: { _id, user: commentUser, name, text, date },
  user,
  postId,
  query,
}) => {
  const history = useHistory();
  const { mutate: deleteComment } = useDeleteComment(postId, _id, query);

  return (
    <CommentContainer square={true} elevation={0} variant='outlined' $xs>
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
            {`${DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}`}
          </Text>
        </Flex>
        {user && (
          <>
            {user._id === commentUser && (
              <DangerButton onClick={() => deleteComment()}>
                Delete
              </DangerButton>
            )}
          </>
        )}
      </Flex>
      <Text $size='1rem'>{text}</Text>
    </CommentContainer>
  );
};

export default Comment;
