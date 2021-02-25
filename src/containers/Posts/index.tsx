import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import IPost from '../../core/models/post.model';
import { clearComments, listComments } from '../../core/store/comments/actions';
import { clearPosts, listPosts } from '../../core/store/posts/actions';
import CustomCard from '../../components/CustomCard';
import { listReplies } from '../../core/store/replies/actions';
import { listUsers } from '../../core/store/users/actions';
interface IPostListSelector {
  loading: boolean;
  error: string;
  posts: IPost[];
}
interface IUserSelector {
  loading: boolean;
  userError: string;
  users: any[];
}
const Posts = () => {
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();

  const postList = useSelector((state: any) => state.posts);
  const { error, posts = [] }: IPostListSelector = postList;

  const userList = useSelector((state: any) => state.users);
  const { userError, users = [] }: IUserSelector = userList;

  const handleClick = (id: number) => {
    dispatch(clearComments());
    dispatch(listComments(id, 1));
    dispatch(listReplies(id));
  };

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setpage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    dispatch(clearPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listPosts(page));
    dispatch(listUsers());
  }, [dispatch, page]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  if (error) return <div>Error </div>;
  return (
    <div onScroll={handleScroll} className="posts">
      {posts.map((post: any, index: any) => (
        <CustomCard
          onClick={() => handleClick(post.id)}
          data={post}
          key={index}
          title="Comments"
          type="post"
          user={users.find((user) => user.id === post.userId)}
        />
      ))}
    </div>
  );
};

export default Posts;
