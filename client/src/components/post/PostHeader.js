import React from 'react';
import { DateTime } from 'luxon';
import { CircularProgress } from '@material-ui/core';
import {
  Flex,
  PostItemAuthor,
  ProfileName,
  Text,
  ProfileHeading,
  ProfileBox,
  StyledButton,
  StyledPaper as MainContainer,
} from '../styled';

const PostHeader = ({ isLoading, post: { name, user, createdAt } }) => {
  return (
    <MainContainer square={true} elevation={0} variant='outlined' $xs>
      {isLoading ? (
        <Flex center>
          <CircularProgress thickness={5} />
        </Flex>
      ) : (
        <>
          <Flex>
            <PostItemAuthor
              $size='1rem'
              $mR='1rem'
              onClick={() => history.push(`/profile/${user}`)}
            >
              {name}
            </PostItemAuthor>
            <Text $size='0.9rem'>
              Posted on{' '}
              {`${DateTime.fromISO(createdAt).toFormat('dd/MM/yyyy')}`}
            </Text>
          </Flex>
        </>
      )}
    </MainContainer>
  );
};

export default PostHeader;
