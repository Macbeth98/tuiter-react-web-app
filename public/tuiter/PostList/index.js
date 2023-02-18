import PostItem from './PostItem.js';
import PostItems from './PostItems.js';

const PostList = () => {
  return `
      ${PostItems.map((post) => PostItem(post)).join('')}
    `;
};

export default PostList;
