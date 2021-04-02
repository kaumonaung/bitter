import React from 'react';
import { useGetPostById, useGetCurrentUser } from '../../hooks';
import PostHeader from './PostHeader';
import PrivatePostHeader from './PrivatePostHeader';
import Comment from '../comment/Comment';
import { GridContainer } from '../styled';
import { useAuthDispatch } from '../../context';

const Post = ({ match }) => {
  const dispatch = useAuthDispatch();
  const { data: post, isLoading } = useGetPostById(match.params.post_id);
  const { data: user } = useGetCurrentUser(dispatch);

  if (post) {
    console.log(post);
  }

  return (
    <>
      <GridContainer container containerdirection='column' justify='center'>
        <GridContainer container item direction='column' $maxWidth='600px'>
          {post && (
            <>
              {user ? (
                <PrivatePostHeader
                  post={post}
                  isLoading={isLoading}
                  query={['post', match.params.post_id]}
                  user={user}
                />
              ) : (
                <PostHeader post={post} isLoading={isLoading} />
              )}
              {post.comments.map((comment) => (
                <Comment
                  comment={comment}
                  user={user}
                  postId={match.params.post_id}
                  query={['post', match.params.post_id]}
                />
              ))}
            </>
          )}
        </GridContainer>
      </GridContainer>
    </>
  );
};

export default Post;
