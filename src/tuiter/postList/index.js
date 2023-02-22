import React from 'react';
import PostItems from './PostItems';
import PostItem from './PostItem';

const PostList = () => {
  return (
    <>
      {PostItems.map((post) => (
        <PostItem postItem={post} />
      ))}
    </>
  );
};

export default PostList;
