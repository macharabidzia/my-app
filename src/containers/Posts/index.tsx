import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import IPost from '../../core/models/post.model';
import { listComments } from '../../core/store/comments/actions';
import { listPosts } from '../../core/store/posts/actions';
const Posts = () => {
  const postList = useSelector((state: any) => state.posts);

  const dispatch = useDispatch();

  const {
    loading = true,
    error,
    posts = [],
  }: { loading: boolean; error: string; posts: IPost[] } = postList;

  const handleClick = (id: number) => {
    dispatch(listComments(id));
  };
  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  useEffect(() => {
    console.log(posts);
  });
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <PostCard
          onClick={() => handleClick(post.id)}
          data={post}
          key={index}
        />
      ))}
    </div>
  );
};

export default Posts;
