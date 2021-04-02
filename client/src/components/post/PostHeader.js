import React from 'react';
import { DateTime } from 'luxon';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import {
  PrimaryColorContainer as MainContainer,
  StyledLikedWrapper as LikeWrapper,
  Flex,
  PostItemAuthor,
  Text,
  GreyIcon as StyledIcon,
  StyledButton as Button,
} from '../styled';

const PostHeader = ({
  post: { text, name, likes, user, createdAt, updatedAt, _id, comments },
  isLoading,
}) => {
  const history = useHistory();

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
            {createdAt != updatedAt && (
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
            <Button color='primary' onClick={() => history.goBack()}>
              Return
            </Button>
          </Flex>
        </>
      )}
    </MainContainer>
  );
};

export default PostHeader;
