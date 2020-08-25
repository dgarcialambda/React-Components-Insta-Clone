import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  console.log(post, 'post.js')
  console.log(props.postData, 'dummyData')
  return (
    <div className='post-border'>
      <PostHeader
        username={props.postData.username}
        thumbnailUrl={props.postData.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.postData.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection 
      likePost={() => likePost(props.postData.id)} 
      numberOfLikes={props.postData.likes}
      
      />
      {/* Comments also wants its props! */}
      <Comments
      comments={props.postData.comments}
      />
    </div>
  );
};

export default Post;
