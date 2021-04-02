import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {
  StyledPaper as MainContainer,
  StyledLikedWrapper as LikeWrapper,
  StyledIcon,
  Flex,
  PostItemAuthor,
  Text,
} from '../styled';

const PostItem = ({
  post: { text, name, likes, user, createdAt, updatedAt, _id, comments },
}) => {
  const history = useHistory();

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
            Posted on{' '}
            {`${DateTime.fromISO(createdAt).toLocaleString(
              DateTime.DATE_FULL
            )}`}
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
          <Flex>
            <LikeWrapper style={{ cursor: 'default' }}>
              <AiOutlineHeart />
            </LikeWrapper>
            <Text $size='1.2rem' $mL='0.5rem' grey>
              {likes.length}
            </Text>
          </Flex>

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
      </Flex>
    </MainContainer>
  );
};

export default PostItem;
