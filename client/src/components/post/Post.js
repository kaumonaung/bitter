import React from 'react';
import { useGetPostById } from '../../hooks';

const Post = ({ match }) => {
  const { data } = useGetPostById(match.params.post_id);

  if (data) {
    console.log(data);
  }
  return <div></div>;
};

export default Post;
