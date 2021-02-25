import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import IPost from '../../core/models/post.model';
import { clearComments, listComments } from '../../core/store/comments/actions';
import { clearPosts, listPosts } from '../../core/store/posts/actions';
import CustomCard from '../../components/CustomCard';
import { listReplies } from '../../core/store/replies/actions';
import { listUsers } from '../../core/store/users/actions';
import { Input } from 'reactstrap';
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
  const [userId, setUserId] = useState();

  const dispatch = useDispatch();

  const postList = useSelector((state: any) => state.posts);
  const { error, posts = [] }: IPostListSelector = postList;

  const userList = useSelector((state: any) => state.users);
  const { users = [] }: IUserSelector = userList;
  const userRef = useRef(userId);
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
  const filterHandler = (event: any) => {
    setUserId(event.target.value);
  };
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearComments());
    dispatch(clearPosts());
    dispatch(listPosts(1, userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (userRef.current) {
      dispatch(listPosts(page, userRef.current));
    } else {
      dispatch(listPosts(page));
    }
  }, [dispatch, page]);
  useEffect(() => {
    console.log(users);
  }, [users]);

  if (error) return <div>Error </div>;
  return (
    <>
      <Input type="text" onChange={filterHandler} />
      <div onScroll={handleScroll} className="posts">
        {posts.map((post: IPost, index: number) => (
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
    </>
  );
};

export default Posts;
